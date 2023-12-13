import { View, Text, Image, Switch } from "react-native";
import { useState } from "react";
import React from "react";
import tw from "twrnc";

export default function Reminder({ isEnabled, setIsEnabled }) {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <View style={tw`flex-row items-center justify-between mx-7 mt-3 mb-3`}>
        <View style={tw`flex-row items-center gap-4`}>
          <Image
            source={require("../assets/createTaskIcon/reminder.png")}
            style={tw`h-8 w-8`}
          />
          <Text style={tw`text-base`}>Reminder</Text>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
