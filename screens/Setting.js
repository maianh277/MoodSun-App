import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Account from "../components/Account";
import Customization from "../components/Customization";
import ServiceCenter from "../components/ServiceCenter";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/FirebaseConfig";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
        navigation.replace("Login");
      }
    });
    return unsubscribe;
  }, []);
  const handleLogout = () => {
    console.log("Logging out...");
    auth
      .signOut()
      .then(
        () => console.log("Sign out successful"),
        navigation.navigate("Login")
      )
      .catch((error) => {
        console.error("Error signing out: ", error.code, error.message);
      });
  };

  return (
    <View style={tw`bg-white p-7 pt-10 flex-1`}>
      <Text style={tw`text-3xl text-center font-bold  mb-2`}>Settings</Text>
      <Account />
      <Customization isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <ServiceCenter />
      {email ? <Text onPress={handleLogout}>Log out</Text> : ""}
    </View>
  );
};

export default SettingsScreen;
