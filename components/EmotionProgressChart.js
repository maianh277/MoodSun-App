import React, { useEffect } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import { db } from "../config/FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import tw from "twrnc";
import { Chip } from "@rneui/themed";
import Recommendation from "./Recommendation";

const EmotionProgressChart = () => {
  const [data, setData] = useState({
    labels: ["happy", "normal", "sad", "cry", "angry"],
    data: [],
  });

  const defaultData = [0, 0, 0, 0, 0, 0, 0];
  if (!data || data.length === 0) {
    setData(defaultData);
    return;
  }
  const [month, setMonth] = useState("");
  const [maxEmotion, setMaxEmotion] = useState("");
  useEffect(() => {
    const userEmail = getAuth().currentUser.email;

    const date = new Date();

    const monthIndex = new Date().getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[monthIndex];

    setMonth(month);

    const start = new Date(date.getFullYear(), monthIndex, 1)
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "/");

    const end = new Date(date.getFullYear(), monthIndex + 1, 0)
      .toISOString()
      .split("T")[0]
      .replace(/-/g, "/");

    const q = query(
      collection(db, "emotion"),
      where("account", "==", userEmail),
      where("date", ">=", start),
      where("date", "<=", end)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newEmotion = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const emotionGenerals = newEmotion.map(
        (item) => item.emotionGeneral.name
      );

      // Đếm số emotion
      const result = emotionGenerals.reduce((acc, name) => {
        if (!acc[name]) {
          acc[name] = 0;
        }
        acc[name]++;
        return acc;
      }, {});

      // const maxEmotion = Object.keys(result).reduce((a, b) => {
      //   return result[a] > result[b] ? a : b;
      // });
      const maxEmotion =
        Object.keys(result)
          .map((key) => ({ emotion: key, count: result[key] }))
          .sort((a, b) => b.count - a.count)[0]?.emotion || "";
      setMaxEmotion(maxEmotion);
      const total = Object.values(result).reduce((a, b) => a + b, 0);
      setData((prev) => ({
        ...prev,
        data: [
          result["happy"] / total || 0,
          result["normal"] / total || 0,
          result["sad"] / total || 0,
          result["cry"] / total || 0,
          result["angry"] / total || 0,
        ],
      }));
    });

    return () => unsubscribe();
  }, []);
  const screenWidth = Dimensions.get("window").width;
  const colors = [
    "rgba(212, 246, 233, opct)",
    "rgba(255, 243, 205, opct)",
    "rgba(181, 207, 241, opct)",
    "rgba(155, 194, 245, opct)",
    "rgba(221, 101, 110, opct)",
  ];

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1, index) => {
      return index != undefined
        ? colors[index].replace("opct", opacity)
        : `rgba(221, 101, 110, ${opacity})`;
    },
    strokeWidth: 0,
    barPercentage: 0,
    useShadowColorFromDataset: false,
  };

  return (
    <View>
      <Recommendation maxEmotion={maxEmotion} month={month} />
      <View style={tw`mx-20 my-3`}>
        <Chip title={`Mood Bar | ${month}`} type="outline" />
      </View>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default EmotionProgressChart;
