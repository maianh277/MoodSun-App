import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import CustomCalendar from "../components/CustomCalendar";

export default function HomePage() {
  return (
    <View>
      <CustomCalendar />
      <Text style={tw`ml-5 mt-8 font-bold text-xl`}>Today</Text>
      <View>
        <Text>How was your day?</Text>
        <Image source={require("../assets/emoji/happy.png")} />
      </View>
    </View>
  );
}
