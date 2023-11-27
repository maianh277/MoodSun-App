import { View, Text } from "react-native";
import React from "react";
import CustomCalendar from "../components/CustomCalendar";
import tw from "twrnc";
import Task from "../components/Task";

export default function TargetPage() {
  return (
    <View style={tw`bg-white p-2 pt-10 flex-1`}>
      <View>
        <CustomCalendar />
      </View>
      <Text style={tw`ml-6 font-bold text-xl mt-2`}>Task</Text>
      <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
      <Task />
    </View>
  );
}
