import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import LoginButton from "../components/CustomButton";

const VerificationScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();
  return (
    <View style={tw`mt-12 px-4 py-2 bg-white`}>
      <Text style={tw`text-3xl font-bold  `}>Reset Password</Text>
      <Text style={tw`text-slate-400 mb-4`}>
        Please enter the verification code sent to phone number to recover the
        password.
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        placeholder="Verification Code"
        keyboardType="number-pad"
        onChangeText={setCode}
        value={code}
      />
      <LoginButton
        onLoginPress={() => navigation.navigate("ResetSucessful")}
        buttonText="Continue"
      />
      <View
        style={tw`absolute bottom-10 right-10 w-5 h-5 bg-yellow-500 rounded-full`}
      ></View>
      <View
        style={tw`absolute bottom-20 right-20 w-10 h-10 bg-yellow-500 rounded-full`}
      ></View>
      <View
        style={tw`absolute bottom-30 right-30 w-20 h-20 bg-yellow-500 rounded-full opacity-50`}
      ></View>
    </View>
  );
};

export default VerificationScreen;
