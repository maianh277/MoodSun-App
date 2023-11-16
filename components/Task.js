import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Task() {
  return (
    <View>
      <View style={tw`flex-row items-center mx-9 my-3`}>
        <FontAwesome5 name="square" size={20} color="#000" />
        <View style={tw`ml-5`}>
          <Text style={[tw`text-xl font-semibold`, { color: "#2D2D2D" }]}>
            Hello cac ban
          </Text>
          <Text style={[tw``, { color: "#515070" }]}>at 09:00</Text>
        </View>
      </View>
      <View style={tw`h-[2px] bg-gray-100 mx-6 mt-1`}></View>
    </View>
  );
}
