import React, { useEffect } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import { db } from "../config/FirebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import tw from "twrnc";
import { Chip, withTheme, lightColors } from "@rneui/themed";
const EmotionProgressChart = () => {
  const [data, setData] = useState({
    labels: ["happy", "normal", "sad", "cry", "angry"],
    data: [],
  });
  const [month, setMonth] = useState("");
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

    // console.log("date: ", date);
    // console.log("month: ", month);
    // console.log("start day:", start);
    // console.log("end day:", end);
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
      // console.log("emotionGenerals:", emotionGenerals);

      // Đếm số emotion
      const result = emotionGenerals.reduce((acc, name) => {
        if (!acc[name]) {
          acc[name] = 0;
        }
        acc[name]++;
        // console.log("acc:", acc);
        // console.log("name:", name);

        return acc;
      }, {});
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
    backgroundGradientFrom: "#FEFCF5",
    backgroundGradientTo: "#FEFCF5",
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
      <Text style={tw`text-xl font-bold mb-2 text-center`}>Mood Progress</Text>
      <View style={tw`mx-20 my-4`}>
        <Chip title={`${month}`} />
      </View>
      <ProgressChart
        style={tw`rounded-lg`}
        data={data}
        width={screenWidth * 0.9}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
  );
};

export default EmotionProgressChart;
