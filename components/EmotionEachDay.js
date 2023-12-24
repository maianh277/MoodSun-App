import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { emotionsImages } from "../path/images";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/FirebaseConfig";
export default function EmotionEachDay({
  time,
  emotionGeneralName,
  updateEmotion,
  editEmotion,
  id,
  color,
  image,
}) {
  const deleteEmotion = async () => {
    try {
      await deleteDoc(doc(db, "emotion", id));
      if (image) {
        const deleteRef = ref(storage, image);
        deleteObject(deleteRef);
      }
      updateEmotion();

      console.log("Emotion deleted successfully");
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
  const imageEmotions = emotionsImages[emotionGeneralName];

  return (
    <Swipeable
      renderRightActions={RightActions}
      renderLeftActions={LeftActions}
    >
      <View
        style={tw`flex-row justify-between items-center bg-[${color}] my-2 mx-5 py-1 pr-3 rounded-xl`}
      >
        <View style={tw`flex-row items-center`}>
          <Image style={tw`h-16 w-16`} source={imageEmotions} />
          <Text style={[tw`text-lg font-bold`]}>{emotionGeneralName}</Text>
        </View>
        <View style={tw`flex-row gap-4`}>
          <Text style={tw`text-sm`}>{time}</Text>
          <FontAwesome5 name="chevron-right" size={20} color="#000" />
        </View>
      </View>
    </Swipeable>
  );
}
