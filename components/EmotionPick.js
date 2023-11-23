import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
export default function EmotionPick({ bgColor }) {
  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>How was your day?</Text>
        <View style={tw`flex-row justify-center`}>
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/happy.png")}
          />
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/normal.png")}
          />
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/sad.png")}
          />
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/cry.png")}
          />
          <Image
            style={tw`h-16 w-16`}
            source={require("../assets/emoji/angry.png")}
          />
        </View>
      </View>
    </View>
  );
}
