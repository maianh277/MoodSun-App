import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";

export default function SplashScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Image
        source={require("../assets/createTaskIcon/sun.png")}
        style={tw`w-96 h-96`}
      />
    </View>
  );
}
