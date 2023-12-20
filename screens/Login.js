import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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
  const handleLogin = () => {
    if (!email && !password) {
      alert("Vui lòng nhập cả email và mật khẩu.");
      return;
    }
    if (!email) {
      alert("Vui lòng nhập email.");
      return;
    }
    if (!password) {
      alert("Vui lòng nhập mật khẩu.");
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => {
        switch(error.code) {
          case 'auth/user-not-found':
            alert('Không tìm thấy người dùng với email này.');
            break;
          case 'auth/wrong-password':
            alert('Mật khẩu không chính xác.');
            break;
          case 'auth/invalid-email':
            alert('Email không hợp lệ.');
            break;
          default:
            alert('Đã xảy ra lỗi: ' + error.message);
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
        <Text>Don't have an account?</Text>
        <Text onPress={() => navigation.navigate("Signup")}>Sign up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
