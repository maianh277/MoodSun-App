import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import CustomCalendar from "../components/CustomCalendar";

import EmotionEachDay from "../components/EmotionEachDay";
import EmotionPick from "../components/EmotionPick";
export default function HomePage() {
  return (
    <View>
      <View>
        <CustomCalendar />
      </View>
      <Text style={tw`ml-6 font-bold text-xl mt-2`}>Today</Text>
      <EmotionEachDay />
      <EmotionPick bgColor="#FFF2E0" />
    </View>
  );
}
