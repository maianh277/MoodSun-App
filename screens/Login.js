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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox } from "react-native-elements";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkRememberMe = async () => {
      const rememberMeValue = await AsyncStorage.getItem("rememberMe");
      if (rememberMeValue === "true") {
        const savedEmail = await AsyncStorage.getItem("email");
        const savedPassword = await AsyncStorage.getItem("password");
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    };

    checkRememberMe();
  }, []);

  const showToast = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
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

        if (user && user.email) {
          console.log(user.email);

          if (rememberMe) {
            AsyncStorage.setItem("email", email);
            AsyncStorage.setItem("password", password);
            AsyncStorage.setItem("rememberMe", "true");
          } else {
            AsyncStorage.removeItem("email");
            AsyncStorage.removeItem("password");
            AsyncStorage.setItem("rememberMe", "false");
          }

          navigation.replace("Menu");
        } else {
          showToast("An unexpected error occurred during login.");
        }
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
    <View style={tw`px-4 py-2 bg-white flex-1`}>
      <Text style={tw`text-3xl pt-10 font-bold`}>Hi, welcome back!</Text>
      <Text style={tw`text-slate-400 mb-4`}>
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
      <View style={tw`flex-row items-center justify-between mb-4`}>
        <View style={tw`flex-row items-center`}>
          <CheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            containerStyle={tw`p-0 m-0`}
          />
          <Text style={tw``}>Remember me</Text>
        </View>

        <Text
          style={tw`text-blue-500`}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          Forgot Password
        </Text>
      </View>

      <DividerText />
      <SocialLoginOptions></SocialLoginOptions>
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
