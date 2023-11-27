import React from 'react';
import { View, TextInput } from 'react-native';
import tw from 'twrnc';

const OtpInput = ({ otp, handleOtpChange }) => {
  return (
    <View style={tw`flex-row justify-center w-full px-20 mb-8`}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          value={value}
          onChangeText={(text) => handleOtpChange(text, index)}
          maxLength={1}
          style={tw`border border-gray-300 w-15 h-15 mx-2 text-center text-xl`}
          keyboardType="numeric"
          secureTextEntry
        />
      ))}
    </View>
  );
};

export default OtpInput;
