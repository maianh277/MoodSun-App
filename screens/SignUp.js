import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import SignUpForm from "../components/SignUpForm";
import SocialLoginOptions from "../components/SocialLoginOptions";
import DividerText from "../components/DividerText";
import LoginButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={tw`mt-12 px-4 py-2`}>
      <Text style={tw`text-3xl font-bold  mb-2`}>Create an account</Text>
      <Text style={tw` mb-6`}>Be one of our family!</Text>
      <SignUpForm
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />

      <LoginButton
        onLoginPress={() => navigation.navigate("Login")}
        buttonText="Sigh Up"
      />

      <DividerText />
      <SocialLoginOptions />
    </View>
  );
};

export default SignUp;
