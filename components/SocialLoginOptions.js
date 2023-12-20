import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import tw from "twrnc";

const SocialLoginOptions = () => {
  return (
    <>
      <TouchableOpacity
        style={tw`flex-row items-center justify-center mb-2 border border-gray-300 p-3 rounded-lg`}
      >
        <Image
          source={require("../assets/createTaskIcon/facebook.png")}
          style={tw`h-5 w-5 mr-2`}
        />
        <Text>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-row items-center justify-center border border-gray-300 p-3 rounded-lg`}
      >
        <Image
          source={require("../assets/createTaskIcon/google.png")}
          style={tw`h-5 w-5 mr-2`}
        />
        <Text>Login with Google</Text>
      </TouchableOpacity>
    </>
  );
};

export default SocialLoginOptions;
