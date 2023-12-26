import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

import EmotionProgressChart from "../components/EmotionProgressChart";

export default function StatisticPage({}) {
  return (
    <View style={tw`bg-white p-7 pt-10 flex-1`}>
      <View style={tw`items-center mt-3 `}>{/* <MoodChart /> */}</View>
      <View style={tw`items-center mt-3 `}>
        <EmotionProgressChart></EmotionProgressChart>
      </View>
    </View>
  );
}
