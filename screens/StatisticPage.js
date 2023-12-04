import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import AcquaintanceComponent from "../components/AcquaintanceComponent";
import ActivitiesComponent from "../components/Activities";
import MoodBarComponent from "../components/MoodBarComponent";

export default function StatisticPage() {
  return (
    <View style={tw`bg-white p-2 pt-10 flex-1`}>
      <MoodBarComponent></MoodBarComponent>
      <AcquaintanceComponent></AcquaintanceComponent>
    <ActivitiesComponent></ActivitiesComponent>
    </View>
  );
}
