import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import EmailAndPasswordInput from "../components/EmailAndPasswordInput";
import LoginButton from "../components/CustomButton";
import SocialLoginOptions from "../components/SocialLoginOptions";
import DividerText from "../components/DividerText";
import { useNavigation } from "@react-navigation/native";
import SimpleLineChart from "../components/SimpleLineChart";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={tw` mt-12 px-4 py-2`}>
      <Text style={tw`text-3xl font-bold  `}>Hi, welcome back!</Text>
      <Text style={tw`text-slate-400 mb-6`}>Hello again, you've been missed!</Text>

      <EmailAndPasswordInput
        password={password}
        setPassword={setPassword}
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />

      <LoginButton
        onLoginPress={() => navigation.navigate("Menu")}
        buttonText="Login"
      />

      <View style={tw`flex-row justify-between mb-4`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`mr-2`}>Remember me</Text>

          <View style={tw`h-4 w-4 border border-gray-300 rounded`}></View>
        </View>
        <Text
          style={tw`text-blue-500`}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          Forgot Password
        </Text>
      </View>
      <DividerText />
      <SocialLoginOptions />
      {/* <SimpleLineChart></SimpleLineChart> */}
      <View style={tw`flex-row justify-center mb-4 mt-4`}>
      <Text>Don't have an account?</Text>
      <Text onPress={() => navigation.navigate("Signup")}>Sign up</Text>
      </View>
      
    </View>
  );
};

export default LoginScreen;
