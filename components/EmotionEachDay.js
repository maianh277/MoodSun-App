import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

export default function EmotionEachDay({ date, emotionGeneralName }) {
  return (
    <View>
      <View
        style={tw`flex-row justify-between items-center bg-[#D4F6E9] my-2 mx-5 py-1 pr-3 rounded-xl`}
      >
        <View style={tw`flex-row items-center`}>
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/normal.png")}
          />
          <Text style={[tw`text-lg font-bold`, { color: "#005B38" }]}>
            {emotionGeneralName}
          </Text>
        </View>
        <View style={tw`flex-row gap-4`}>
          <Text style={tw`text-sm`}>{date}</Text>
          <FontAwesome5 name="chevron-right" size={20} color="#000" />
        </View>
      </View>
    </View>
  );
}
