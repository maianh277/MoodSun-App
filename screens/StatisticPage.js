import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { useEffect, useState } from "react";
import { db } from "../config/FirebaseConfig";
import MoodChart from "../components/SimpleLineChart";
import EmotionProgressChart from "../components/EmotionProgressChart";
import {
  collection,
  getDocs,
  query,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import moment from "moment";
import Recommendation from "../components/Recommendation";
import { ScrollView } from "react-native-gesture-handler";

const emotionScore = {
  angry: -15,
  cry: -10,
  sad: -5,
  normal: 5,
  happy: 10,
};

export default function StatisticPage({ navigation }) {
  const userEmail = getAuth().currentUser.email;

  const fetchEmotion = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "emotion"), where("account", "==", userEmail))
      );

      // console.log(querySnapshot.docs)

      // const newEmotion = querySnapshot.docs.map((doc) => ({
      //   ...doc.data(),
      // }));
      let chartDataObject = [];
      // const labels = [];
      const names = ["happy", "normal", "sad", "cry", "angry"];
      // const data = []
      let edata = [0, 0, 0, 0, 0];
      let currentScore = 0;

      for (const doc of querySnapshot.docs) {
        const cdate = moment().diff(
          moment(doc.data()["date"], "YYYY/MM/DD"),
          "days"
        );
        if (cdate < 7) {
          const date = doc.data()["date"].split("/");
          // console.log(date)
          const idx = chartDataObject.findIndex(
            (obj) => obj.label === `${date[1]}/${date[2]}`
          );

          if (idx == -1) {
            let newScore =
              currentScore +
              parseInt(emotionScore[doc.data().emotionGeneral.name]);
            // if (newScore < 0) newScore = 0;

            chartDataObject.push({
              label: `${date[1]}/${date[2]}`,
              data: newScore,
            });
          } else {
            chartDataObject[idx].data =
              chartDataObject[idx].data +
              parseInt(emotionScore[doc.data().emotionGeneral.name]);
          }
        }
      }
      chartDataObject = chartDataObject.sort((a, b) =>
        moment(a.label, "MM/DD").diff(moment(b.label, "MM/DD"), "days")
      );
      console.log(chartDataObject);

      let sum = edata.reduce((a, b) => a + b);
      edata = edata.map((e) => e / sum);

      setChartData({
        labels: chartDataObject.map((m) => m.label),
        datasets: [
          {
            data: chartDataObject.map((m) => m.data),
            color: (opacity = 1) => `rgba(252, 76, 76, ${opacity})`,
            strokeWidth: 5,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const [emotionChartData, setEmotionChartData] = useState({
    labels: ["happy", "normal", "sad", "cry", "angry"],
    data: [0, 0, 0, 0, 0],
  });

  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(252, 76, 76, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("reloaded");
      const fetchData = async () => {
        await fetchEmotion();
      };
      fetchData();
    });
  }, [navigation]);
  return (
    <ScrollView style={tw`bg-white flex-1`}>
      <Text style={tw`text-xl font-bold text-center mt-11`}>
        Mood Statistic
      </Text>
      {/* <View style={tw`mx-4 my-5`}></View> */}
      <View style={tw`items-center`}>
        <EmotionProgressChart></EmotionProgressChart>
      </View>
      <View style={tw`mx-5 my-8`}>
        {/* <Text style={tw`text-xl font-bold text-center`}>Mood</Text> */}
        {/* <Recommendation></Recommendation> */}
        {/* <View style={tw`mx-4 my-5`}></View> */}
        <View style={tw`items-center`}>
          <MoodChart data={chartData} />
        </View>
      </View>
    </ScrollView>
  );
}
