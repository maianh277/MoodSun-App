import React, { useState } from "react";
import { View, Text, TextInput, Alert, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/CustomButton";
import tw from "twrnc";
import { auth } from "../config/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        ToastAndroid.show(
          "Check your email to change password",
          ToastAndroid.SHORT
        );
        navigation.navigate("Login");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          ToastAndroid.show("Invalid email", ToastAndroid.SHORT);
        } else {
          console.log("Error", error.message);
          ToastAndroid.show("Unknown error", ToastAndroid.SHORT);
        }
      });
  };

  return (
    <View style={tw`px-4 bg-white flex-1 p-6 mt-3`}>
      <Text style={tw`text-3xl mt-10 font-bold`}>Reset Password</Text>
      <Text style={tw`text-slate-400 mb-4`}>
        Please input your email to recover your password
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-4 rounded-xl mb-2`}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <LoginButton onLoginPress={handleResetPassword} buttonText="Continue" />
    </View>
  );
};

export default ResetPasswordScreen;
