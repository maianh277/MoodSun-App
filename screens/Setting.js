import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
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
    <ScrollView style={tw`bg-white flex-1`}>
      <View style={tw`bg-[#F4EDE3]`}>
        <Text style={tw`font-bold text-3xl mb-5 mx-6 mt-20`}>Setting</Text>
      </View>
      <View style={tw`mx-7 mt-3`}>
        <Account />
        <Customization isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        <ServiceCenter />
        {email ? (
          <TouchableOpacity
            onPress={handleLogout}
            style={tw`mt-7 items-center bg-[#FF9560] p-3 rounded-2xl`}
          >
            <Text style={tw`text-lg font-semibold text-white`}>Log out</Text>
          </TouchableOpacity>
        ) : (
          ""
        )}
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
