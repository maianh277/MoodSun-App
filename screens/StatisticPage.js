import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import MoodChart from "../components/SimpleLineChart";
import { useEffect, useState } from "react";
import { db } from "../config/FirebaseConfig";
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
import EmotionProgressChart from "../components/EmotionProgressChart";

const emotionScore = {
  "angry": -50,
  "cry": -25,
  "sad": 0,
  "normal": 25,
  "happy": 50,
}

export default function StatisticPage({ navigation }) {

  const userEmail = getAuth().currentUser.email;

  const fetchEmotion = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, "emotion"),
          where("account", "==", userEmail),
        )
      );
  
      // console.log(querySnapshot.docs)
  
      // const newEmotion = querySnapshot.docs.map((doc) => ({
      //   ...doc.data(),
      // }));
      const labels = [];
      const names = ["happy", "normal", "sad", "cry", "angry"]
      const data = []
      let edata = [50, 50, 50, 50, 50]
      let currentScore = 50;

      for (const doc of querySnapshot.docs){
        const cdate = moment().diff(moment(doc.data()["date"], "YYYY/MM/DD"), "days");
        if (cdate <= 7) {
          const date = doc.data()["date"].split("/")
          // console.log(date)
          const idx = labels.indexOf(`${date[1]}/${date[2]}`)
          const eidx = names.indexOf(doc.data().emotionGeneral.name)
          if (idx == -1) {
            labels.push(`${date[1]}/${date[2]}`)
            data.push(currentScore + parseInt(emotionScore[doc.data().emotionGeneral.name]))
          }
          else {
            data[idx] = data[idx] + parseInt(emotionScore[doc.data().emotionGeneral.name])
          }
          edata[eidx] = edata[eidx] + parseInt(emotionScore[doc.data().emotionGeneral.name])
        }
      }
      // labels.sort()
      // console.log(edata)

      let sum = edata.reduce((a,b) => a+b)
      edata = edata.map(e => e/sum)

      setChartData({
        labels,
        datasets: [
          {
            data,
            color: (opacity = 1) => `rgba(252, 76, 76, ${opacity})`,
            strokeWidth: 5,
          },
        ],
      });

      setEmotionChartData({
        labels: names,
        data: edata
      })

    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const [emotionChartData, setEmotionChartData] = useState({
    labels: ["Swim", "Bike", "Run"],
    data: [24, 0.6, 0.8]
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
    navigation.addListener('focus', () => {
      console.log("reloaded");
      const fetchData = async () => {
        await fetchEmotion();
      };
      fetchData();
    });
    
  }, [navigation]);

  return (
    <View style={tw`bg-white p-7 pt-10 flex-1`}>
      <View style={tw`items-center mt-3 `}>
        <MoodChart data={chartData} />
      </View>
      <View style={tw`items-center mt-3 `}>
        <EmotionProgressChart data={emotionChartData}></EmotionProgressChart>
      </View>
    
    </View>
  );
}