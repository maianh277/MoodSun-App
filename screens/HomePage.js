import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import CustomCalendar from "../components/CustomCalendar";
import EmotionEachDay from "../components/EmotionEachDay";
import Collapsible from "react-native-collapsible";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { getAuth } from "firebase/auth";
import CreateEmotion from "./CreateEmotion";

export default function HomePage() {
  const [expandedId, setExpandedId] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const userEmail = getAuth().currentUser.email;
  // fetch task
  const fetchEmotion = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "emotion"), where("account", "==", userEmail))
      );

      const newEmotion = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmotions(newEmotion);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchEmotion();
    };
    fetchData();
  }, []);

  // mở rộng thẻ EmotionEachDay để view thông tin detail
  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  return (
    <ScrollView style={tw`bg-white p-2 pt-10 flex-1`}>
      <Text style={tw`font-bold text-xl my-3 mx-5`}>Your Mood Status</Text>
      <View>
        <CustomCalendar />
      </View>
      <Text style={tw`ml-6 font-bold text-xl mt-2`}>Today</Text>
      {emotions &&
        emotions.map((emotion) => (
          <View key={emotion.id}>
            <TouchableOpacity onPress={() => toggleExpand(emotion.id)}>
              <EmotionEachDay
                id={emotion.id}
                date={emotion.date}
                emotionGeneralName={
                  emotion.emotionGeneral ? emotion.emotionGeneral.name : ""
                }
              />
            </TouchableOpacity>
            <Collapsible
              collapsed={expandedId !== emotion.id}
              style={tw`bg-[#D4F6E9] mx-5 p-4 rounded-lg`}
            >
              <View style={tw`flex-row justify-between mx-3`}>
                <View>
                  <Text>You were with:</Text>
                  <Text style={tw`font-semibold`}>
                    {emotion.acquaintance.name}
                  </Text>
                </View>
                <View>
                  <Text>You were: </Text>
                  <Text style={tw`font-semibold`}>
                    {emotion.emotionDetail.name}
                  </Text>
                </View>
              </View>
              <Text style={tw`font-semibold text-center`}>Today, I was </Text>
              <View
                style={tw`m-1 border p-3 border-green-200 rounded-xl bg-white`}
              >
                <Text>{emotion.content}</Text>
              </View>
            </Collapsible>
          </View>
        ))}
      {/* <CreateEmotion fetchEmotion={fetchEmotion} route={route} /> */}
    </ScrollView>
  );
}
