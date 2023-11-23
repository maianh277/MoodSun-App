import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
export default function EmotionInput({ bgColor }) {
  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>
          What was it about?
        </Text>
        <TextInput
          placeholder="Write here"
          style={tw`m-5 p-5 rounded-lg bg-[#FFF4E4]`}
        />
      </View>
    </View>
  );
}
