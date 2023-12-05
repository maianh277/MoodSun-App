import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import AcquaintanceComponent from "../components/AcquaintanceComponent";
import ActivitiesComponent from "../components/Activities";
import MoodBarComponent from "../components/MoodBarComponent";
import MoodChart from "../components/SimpleLineChart";

const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};
export default function StatisticPage() {
  return (
    <View style={tw`bg-white p-2 pt-10 flex-1`}>
      <View style={tw` items-center mt-3`}>
        <MoodChart data={chartData} />
      </View>
      <MoodBarComponent></MoodBarComponent>
      <AcquaintanceComponent></AcquaintanceComponent>
      <ActivitiesComponent></ActivitiesComponent>
    </View>
  );
}
