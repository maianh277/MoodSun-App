import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const DividerText = () => {
  return (
    <View style={tw`flex-row items-center justify-center`}>
      <View style={tw`w-15 border-t border-gray-300`}></View>
      <Text style={tw`px-4`}>or</Text>
      <View style={tw`w-15 border-t border-gray-300`}></View>
    </View>
  );
};

export default DividerText;
