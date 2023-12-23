import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import CustomCalendar from "../components/CustomCalendar";
import EmotionEachDay from "../components/EmotionEachDay";
import Collapsible from "react-native-collapsible";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { emotionDetailImages, acquaintanceImages } from "../path/images";
import { emotionColors } from "../path/color";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState("");
  const userEmail = getAuth().currentUser.email;

  // fetch emotion
  const fetchEmotion = async () => {
    try {
      const formattedDate = selectedDate.replace(/-/g, "/");
      const querySnapshot = await getDocs(
        query(
          collection(db, "emotion"),
          where("account", "==", userEmail),
          where("date", "==", formattedDate)
        )
      );

      const newEmotion = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmotions(newEmotion);
    } catch (error) {
      console.error("Error fetching emotion:", error);
    }
  };

  const updateEmotion = async () => {
    await fetchEmotion();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchEmotion();
    };
    fetchData();
  }, [selectedDate]);

  // mở rộng thẻ EmotionEachDay để view thông tin detail
  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  const editEmotion = () => {
    setEditMode(true);
  };

  const updateEmotionContent = async (id) => {
    setEditMode(false);
    const docRef = doc(db, "emotion", id);
    await updateDoc(docRef, {
      content: newContent,
    })
      .then(() => {
        console.log("Update data successful");
        updateEmotion();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={tw`bg-white p-2 pt-10`}>
      <Text style={tw`font-bold text-xl my-3 mx-5`}>Your Mood Status</Text>
      <View>
        <CustomCalendar
          selected={selectedDate}
          setSelected={setSelectedDate}
          onDateSelect={(date) => setSelectedDate(date)}
        />
      </View>
      <Text style={tw`ml-6 font-bold text-xl mt-2`}>You were ...</Text>
      {emotions &&
        emotions.map((emotion) => (
          <View key={emotion.id}>
            <TouchableOpacity onPress={() => toggleExpand(emotion.id)}>
              <EmotionEachDay
                editEmotion={editEmotion}
                iconPath={emotion.iconPath}
                id={emotion.id}
                updateEmotion={updateEmotion}
                date={emotion.date}
                emotionGeneralName={
                  emotion.emotionGeneral ? emotion.emotionGeneral.name : ""
                }
                color={emotionColors[emotion.emotionGeneral.name] || "#FFF"}
              />
            </TouchableOpacity>

            <Collapsible
              collapsed={expandedId !== emotion.id}
              style={tw`bg-[${
                emotionColors[emotion.emotionGeneral.name]
              }] mx-5 p-4 rounded-lg`}
            >
              <View style={tw`flex-row justify-around mx-3 `}>
                <View style={tw`flex-col items-center`}>
                  <Text>You were with:</Text>
                  <Text style={tw`font-semibold`}>
                    {emotion.acquaintance.name}
                  </Text>
                  <Image
                    style={tw`h-10 w-10 my-2`}
                    source={acquaintanceImages[emotion.acquaintance.name]}
                  ></Image>
                </View>
                <View style={tw`flex-col items-center`}>
                  <Text>You were: </Text>
                  <Text style={tw`font-semibold`}>
                    {emotion.emotionDetail.name}
                  </Text>
                  <Image
                    style={tw`h-10 w-10 my-2`}
                    source={emotionDetailImages[emotion.emotionDetail.name]}
                  ></Image>
                </View>
              </View>
              <Text style={tw`font-semibold text-center`}>Today, I was </Text>
              <View style={tw`m-1 p-3 rounded-xl bg-white`}>
                {editMode && editMode ? (
                  <View>
                    <TextInput
                      style={tw`h-10`}
                      onChangeText={(text) => setNewContent(text)}
                    ></TextInput>
                    <TouchableOpacity
                      style={tw`bg-blue-500 p-2 w-15 rounded-md mt-5`}
                      onPress={() => updateEmotionContent(emotion.id)}
                    >
                      <Text style={tw`text-white text-center`}>Save</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text>{emotion.content}</Text>
                )}
              </View>
            </Collapsible>
          </View>
        ))}
    </ScrollView>
  );
}
