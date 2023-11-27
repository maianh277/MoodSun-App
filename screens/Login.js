import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import EmailAndPasswordInput from '../components/EmailAndPasswordInput';
import LoginButton from '../components/CustomButton';
import SocialLoginOptions from '../components/SocialLoginOptions';
import DividerText from '../components/DividerText';

const LoginScreen = () => {
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);



  return (
    <View style={tw` mt-12 px-4 py-2`}>


      <Text style={tw`text-3xl font-bold  mb-2`}>Hi, welcome back!</Text>
      <Text style={tw` mb-6`}>Hello again, you've been missed!</Text>

      <EmailAndPasswordInput
        password={password}
        setPassword={setPassword}
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />

      <LoginButton onLoginPress={() => console.log('Login pressed')} buttonText="Login" />

      <View style={tw`flex-row justify-between mb-4 mt-4`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`mr-2`}>Remember me</Text>

          <View style={tw`h-4 w-4 border border-gray-300 rounded`}></View>
        </View>
        <Text style={tw`text-blue-500`}>Forgot Password</Text>
      </View>
      <DividerText />
      <SocialLoginOptions />
    </View>
  );
};

export default LoginScreen;