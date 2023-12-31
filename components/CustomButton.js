import React from "react";
import { View } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

const LoginButton = ({ onLoginPress, buttonText }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onLoginPress}
        style={tw`bg-[#ffbc5d] w-full p-3 rounded-xl mb-4 mt-2`}
      >
        <Text style={tw`text-center text-white text-lg`}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
