import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const DividerText = () => {
  return (
    <View style={tw`flex-row items-center justify-center mb-4 `}>
      <View style={tw`flex-1 border-t border-gray-300`}></View>
      <Text style={tw`px-4`}>or continue with</Text>
      <View style={tw`flex-1 border-t border-gray-300`}></View>
    </View>
  );
};

export default DividerText;
