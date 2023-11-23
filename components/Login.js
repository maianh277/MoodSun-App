import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const LoginScreen = () => {
  return (
    <View style={tw` mt-12 px-4 py-2`}>
      <Text style={tw`text-3xl font-bold  mb-2`}>Hi, welcome back!</Text>
      <Text style={tw` mb-6`}>Hello again, you've been missed!</Text>

      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={tw`bg-yellow-500 p-4 rounded mb-4`}>
        <Text style={tw`text-center text-white`}>Login</Text>
      </TouchableOpacity>

      <View style={tw`flex-row justify-between mb-4`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`mr-2`}>Remember me</Text>
          {/* Replace with a proper checkbox component */}
          <View style={tw`h-4 w-4 border border-gray-300 rounded`}></View>
        </View>
        <Text style={tw`text-blue-500`}>Forgot Password</Text>
      </View>

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




      <View style={tw`mt-4`}>
        <Text style={tw`text-center`}>
          Don’t have an Account? <Text style={tw`text-blue-500`}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
