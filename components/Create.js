import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const SignUpScreen = () => {
  // States for input fields
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={tw`mt-12 px-4 py-2`}>
      <Text style={tw`text-3xl font-bold  mb-2`}>Create an account</Text>
      <Text style={tw` mb-6`}>Be one of our family!</Text>
      
      <TextInput 
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput 
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
      />
      <View style={tw`flex-row items-center border border-gray-300 p-4 rounded`}>
    <TextInput
      style={tw`flex-1`}
      placeholder="Password"
      secureTextEntry={secureTextEntry}
    />
    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
      <Image
        style={tw`w-6 h-6`}
        source={secureTextEntry ? require('../assets/createTaskIcon/off.png') : require('../assets/createTaskIcon/view.png')}
      />
    </TouchableOpacity>
  </View>
      <TextInput 
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity style={tw`bg-yellow-500 p-4 rounded mb-4`}>
        <Text style={tw`text-center text-white`}>Sign up</Text>
      </TouchableOpacity>
      
      <View style={tw`flex-row items-center justify-center mb-4`}>
        <View style={tw`flex-1 border-t border-gray-300`}></View>
        <Text style={tw`px-4`}>or continue with</Text>
        <View style={tw`flex-1 border-t border-gray-300`}></View>
      </View>


      {/* Replace these Text components with proper button components */}
      <TouchableOpacity style={tw`flex-row items-center justify-center mb-2 border border-gray-300 p-3 rounded-lg`}>
        <Image source={require('../assets/createTaskIcon/apple.png')} style={tw`h-5 w-5 mr-2`} />
        <Text>Login with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex-row items-center justify-center mb-2 border border-gray-300 p-3 rounded-lg`}>
        <Image source={require('../assets/createTaskIcon/facebook.png')} style={tw`h-5 w-5 mr-2`} />
        <Text>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`flex-row items-center justify-center border border-gray-300 p-3 rounded-lg`}>
        <Image source={require('../assets/createTaskIcon/google.png')} style={tw`h-5 w-5 mr-2`} />
        <Text>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
