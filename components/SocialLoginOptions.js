import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const SocialLoginOptions = () => {
  return (
    <View style={tw`flex-row items-center justify-center gap-3`}>
      <TouchableOpacity
        style={tw`flex-row items-center justify-center  bg-white shadow-sm p-3 rounded-lg`}
      >
        <Image
          source={require("../assets/createTaskIcon/facebook.png")}
          style={tw`h-5 w-5`}
        />
        {/* <Text>Login</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-row items-center justify-center bg-white shadow-sm p-3 rounded-lg`}
      >
        <Image
          source={require("../assets/createTaskIcon/google.png")}
          style={tw`h-5 w-5`}
        />
        {/* <Text>Login</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default SocialLoginOptions;
