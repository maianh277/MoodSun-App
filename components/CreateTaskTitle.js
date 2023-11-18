import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
export default function CreateTaskTitle() {
  return (
    <View style={tw`flex-row justify-between mx-2 mt-5 items-center`}>
      <Ionicons name="chevron-back-outline" size={26} color="#000" />
      <Text style={tw`text-xl font-bold`}>Create Task</Text>
      <Ionicons name="close-outline" size={30} color="#000" />
    </View>
  );
}
