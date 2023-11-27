import React, { useState } from 'react';
import { View, Text,Image } from 'react-native';
import tw from 'twrnc';
import OtpInput from '../components/OtpInput'; 
import LoginButton from '../components/CustomButton'; 

const LoginScreen1 = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={tw`mt-40 bg-white justify-center items-center px-4`}>
      <Text style={tw`text-4xl font-bold text-gray-800 mb-4`}>Password</Text>
      <Text style={tw`text-sm text-gray-800 mb-4`}>Enter your password to open the app</Text>
      
      <OtpInput otp={otp} handleOtpChange={handleOtpChange} />
      <LoginButton onLoginPress={() => console.log('Login pressed', otp.join(''))} />
      <Image
        source={require('../assets/createTaskIcon/sun.png')} 
        style={tw`w-70 h-70 mb-18`}
        resizeMode="contain"
      />
    </View>
  );
};

export default LoginScreen1;
