import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Menu() {
  return (
    <View>
      <View
        style={tw`flex-row justify-around items-center bg-[#F4EDE3] w-full h-20`}
      >
        <FontAwesome5 name="home" size={24} color="#000" />
        <FontAwesome5 name="chart-pie" size={24} color="#000" />
        <View
          style={tw`w-15 h-15 bg-black justify-center items-cente rounded-3xl`}
        >
          <FontAwesome5
            name="plus"
            size={24}
            color="#fff"
            style={tw`ml-[20px]`}
          />
        </View>
        <FontAwesome5 name="tasks" size={24} color="#000" />
        <FontAwesome5 name="cog" size={24} color="#000" />
      </View>
    </View>
  );
}
