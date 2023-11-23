import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image,Text } from 'react-native';
import tw from 'twrnc';

const LoginScreen1 = () => {
  // Tạo một mảng để chứa từng ký tự của mã OTP
  const [otp, setOtp] = useState(['', '', '', '']);

  // Hàm xử lý thay đổi giá trị của mỗi ô nhập liệu
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={tw`mt-40 bg-white justify-center items-center px-4`}>
      <Text style={tw`text-4xl font-bold text-gray-800 mb-4`}>Password</Text>
      <Text style={tw`text-sm text-gray-800 mb-4`}>Enter your password to open the app</Text>
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
      <TouchableOpacity
        onPress={() => console.log('Login pressed', otp.join(''))}
        style={tw`bg-yellow-500 w-full p-4 rounded-lg`}
      >
        <Text style={tw`text-center text-white text-lg`}>Login</Text>
      </TouchableOpacity>
       <Image
        source={require('../assets/createTaskIcon/sun.png')} // Thay thế bằng đường dẫn đến hình ảnh logo của bạn
        style={tw`w-70 h-70 mb-18`}
        resizeMode="contain"
      />
    </View>
  );
};

export default LoginScreen1;
