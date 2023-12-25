import React, { useState, useEffect } from "react";
import { View, Text, ToastAndroid } from "react-native";
import tw from "twrnc";
import EmailAndPasswordInput from "../components/EmailAndPasswordInput";
import LoginButton from "../components/CustomButton";
import SocialLoginOptions from "../components/SocialLoginOptions";
import DividerText from "../components/DividerText";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Menu");
      }
    });
    return unsubscribe;
  }, []);

  const showToast = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP 
    );
  };
  
  const handleLogin = () => {
    if (!email && !password) {
      showToast("Please enter both email and password.");
      return;
    }
    if (!email) {
      showToast("Please enter your email.");
      return;
    }
    if (!password) {
      showToast("Please enter your password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            showToast("No user found with this email.");
            break;
          case "auth/wrong-password":
            showToast("Incorrect password.");
            break;
          case "auth/invalid-email":
            showToast("Invalid email.");
            break;
          default:
            showToast("An error occurred: " + error.message);
        }
      });
  };

  return (
    <View style={tw` mt-12 px-4 py-2`}>
      <Text style={tw`text-3xl font-bold`}>Hi, welcome back!</Text>
      <Text style={tw`text-slate-400 mb-6`}>
        Hello again, you've been missed!
      </Text>

      <EmailAndPasswordInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />

      <LoginButton onLoginPress={handleLogin} buttonText="Login" />

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
      <View style={tw`flex-row justify-center mb-2 mt-4`}>
        <Text>Don't have an account? </Text>
        <Text
          style={tw`underline text-blue-500`}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
