import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const LoginButton = ({ onLoginPress, buttonText }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onLoginPress}
        style={tw`bg-[#ffbc5d] w-full p-4 rounded-lg mb-4`}
      >
        <Text style={tw`text-center text-white text-lg`}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;
