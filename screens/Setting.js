import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Account from "../components/Account";
import Customization from "../components/Customization";
import ServiceCenter from "../components/ServiceCenter";
import { useNavigation } from "@react-navigation/native";
const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={tw`bg-white p-7 pt-10 flex-1`}>
      <Text style={tw`text-3xl text-center font-bold  mb-2`}>Settings</Text>
      <Account />
      <Customization isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <ServiceCenter />
      <Text onPress={() => navigation.navigate("Login")}>Log out</Text>
    </View>
  );
};

export default SettingsScreen;
