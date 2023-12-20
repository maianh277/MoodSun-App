import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { emotionsImages } from "../path/images";

export default function EmotionEachDay({
  date,
  emotionGeneralName,
  updateEmotion,
  editEmotion,
  id,
  color,
}) {
  const deleteEmotion = async () => {
    try {
      await deleteDoc(doc(db, "emotion", id));
      console.log("Emotion deleted successfully");
      updateEmotion();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const RightActions = () => {
    return (
      <View style={tw`flex-row items-center justify-around mx-5`}>
        <TouchableOpacity onPress={deleteEmotion}>
          <FontAwesome5 name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  const LeftActions = () => {
    return (
      <View style={tw`flex-row items-center justify-around mx-5`}>
        <TouchableOpacity onPress={editEmotion}>
          <FontAwesome5 name="edit" size={20} />
        </TouchableOpacity>
      </View>
    );
  };
  const image = emotionsImages[emotionGeneralName];

  return (
    <Swipeable
      renderRightActions={RightActions}
      renderLeftActions={LeftActions}
    >
      <View
        style={tw`flex-row justify-between items-center bg-[${color}] my-2 mx-5 py-1 pr-3 rounded-xl`}
      >
        <View style={tw`flex-row items-center`}>
          <Image style={tw`h-16 w-16`} source={image} />
          <Text style={[tw`text-lg font-bold`]}>{emotionGeneralName}</Text>
        </View>
        <View style={tw`flex-row gap-4`}>
          <Text style={tw`text-sm`}>{date}</Text>
          <FontAwesome5 name="chevron-right" size={20} color="#000" />
        </View>
      </View>
    </Swipeable>
  );
}
