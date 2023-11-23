import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const ResetPasswordScreen = () => {
  const [phone, setPhone] = useState('');

  return (
    <View style={tw`mt-12 px-4 py-2 bg-white`}>
      <Text style={tw`text-3xl font-bold text-center mb-2`}>Reset Password</Text>
      <Text style={tw`text-center mb-6`}>Please input your phone to recover your password</Text>
      
      <TextInput 
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
      />
      <TouchableOpacity style={tw`bg-yellow-500 p-4 rounded mb-4`}>
        <Text style={tw`text-center text-white`}>Continue</Text>
      </TouchableOpacity>
      
      {/* Decorative dots, which you might implement as absolute positioned Views */}
      <View style={tw`absolute bottom-10 right-10 w-5 h-5 bg-yellow-500 rounded-full`}></View>
      <View style={tw`absolute bottom-20 right-20 w-10 h-10 bg-yellow-500 rounded-full`}></View>
      <View style={tw`absolute bottom-30 right-30 w-20 h-20 bg-yellow-500 rounded-full opacity-50`}></View>
    </View>
  );
};

export default ResetPasswordScreen;
