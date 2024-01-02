import React, { useState } from "react";
import { View, Text, ToastAndroid, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import SignUpForm from "../components/SignUpForm";
import SocialLoginOptions from "../components/SocialLoginOptions";
import DividerText from "../components/DividerText";
import LoginButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      ToastAndroid.show("Passwords do not match!", ToastAndroid.SHORT);
      return;
    }

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      ToastAndroid.show("Account created successfully!", ToastAndroid.SHORT);
      navigation.navigate("Login");
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/missing-email":
          errorMessage = "Invalid email.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email already in use.";
          break;
        case "auth/weak-password":
          errorMessage = "Password is too weak.";
          break;
        default:
          errorMessage = "An error occurred: " + error.message;
      }
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  };

  return (
    <View style={tw`bg-white flex-1 mt-3 p-4`}>
      <View style={tw`flex-row`}>
        <View>
          <Text style={tw`mt-10 text-3xl font-bold mx-2`}>
            Create an account
          </Text>
          <Text style={tw`text-slate-400 mb-3 mx-3`}>
            Be one of our family!
          </Text>
        </View>
      </View>
      <View style={tw`p-2`}>
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

        <LoginButton onLoginPress={handleSignUp} buttonText="Sign up" />
        <DividerText />
        <View style={tw`mt-3`}>
          <SocialLoginOptions></SocialLoginOptions>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
