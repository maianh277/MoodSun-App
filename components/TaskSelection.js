import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
export default function TaskSelection({ onPress, task_name, icon_source }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`flex-row items-center gap-8 bg-white mb-2 mt-1 mx-4 py-4 px-9 rounded-xl`}
    >
      <Image source={icon_source} style={tw`h-10 w-10`} />
      <Text style={tw`text-lg font-semibold`}>{task_name}</Text>
    </TouchableOpacity>
  );
}
