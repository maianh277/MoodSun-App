import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/CustomButton";
import tw from "twrnc";

const ResetPasswordScreen = () => {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  return (
    <View style={tw`mt-12 px-4 py-2 bg-white`}>
      <Text style={tw`text-3xl font-bold  mb-2`}>Reset Password</Text>
      <Text style={tw` mb-6`}>
        Please input your phone to recover your password
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
      />
      <LoginButton
        onLoginPress={() => navigation.navigate("ResetPassword2")}
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
