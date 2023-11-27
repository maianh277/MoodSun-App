import { ScrollView, View, Text, Dimensions } from "react-native";
import React from "react";
import EmotionPick from "../components/EmotionPick";
import EmotionDetailPick from "../components/EmotionDetailPick";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Acquaintance from "../components/Acquaintance";

import EmotionInput from "../components/EmotionInput";
import UploadMemories from "../components/UploadMemories";
import DateTask from "../components/DateTask";

const { height, width } = Dimensions.get("window");

export default function CreateEmotion() {
  return (
    <ScrollView style={{ height, width, backgroundColor: "#F4EDE3" }}>
      <View>
        <View style={tw`flex-row items-center justify-between mt-5 mb-2 mx-7 `}>
          <Text style={tw`text-lg font-bold`}>24th September 2022</Text>
          {/* <DateTask style={tw`text-xl`} /> */}
          <Ionicons name="close-outline" size={24} style={tw`ml-[20px]`} />
        </View>
        <EmotionPick bgColor="#FEFDFB" />
        <EmotionDetailPick bgColor="#FEFDFB" />
        <Acquaintance bgColor="#FEFDFB" />
        <EmotionInput bgColor="#FEFDFB" />
        <UploadMemories bgColor="#FEFDFB" />
      </View>
    </ScrollView>
  );
}