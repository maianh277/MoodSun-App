import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const EmailAndPasswordInput = ({ password, setPassword, secureTextEntry, setSecureTextEntry }) => {
  return (
    <>
      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Email"
        keyboardType="email-address"
      />
      <View style={tw`flex-row items-center border border-gray-300 p-4 rounded mb-4`}>
        <TextInput
          style={tw`flex-1`}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Image
            style={tw`w-6 h-6`}
            source={secureTextEntry ? require('../assets/createTaskIcon/off.png') : require('../assets/createTaskIcon/view.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EmailAndPasswordInput;
