import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/CustomButton";
import tw from "twrnc";
import { auth, sendPasswordResetEmail } from '../config/FirebaseConfig'; 

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Kiểm tra email của bạn để thay đổi mật khẩu');
        navigation.navigate("Login");
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={tw`mt-12 px-4 py-2 bg-white`}>
      <Text style={tw`text-3xl font-bold `}>Reset Password</Text>
      <Text style={tw`text-slate-400 mb-4`}>
        Please input your email to recover your password 
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <LoginButton
        onLoginPress={handleResetPassword} // Sử dụng hàm handleResetPassword
        buttonText="Continue"
      />

      <View
        style={tw`absolute bottom-10 right-10 w-5 h-5 bg-yellow-500 rounded-full`}
      ></View>
      <View
        style={tw`absolute bottom-50 right-20 w-10 h-10 bg-yellow-500 rounded-full`}
      ></View>
      <View
        style={tw`absolute bottom-30 right-30 w-20 h-20 bg-yellow-500 rounded-full opacity-50`}
      ></View>
    </View>
  );
};

export default ResetPasswordScreen;
