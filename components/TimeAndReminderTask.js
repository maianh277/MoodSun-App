import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
export default function TimeAndReminderTask() {
  return (
    <View>
      <View>
        <View style={tw`flex-row items-center justify-between mx-7 mt-5 mb-3`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Image
              source={require("../assets/createTaskIcon/repeat.png")}
              style={tw`h-8 w-8`}
            />
            <Text style={tw`text-base`}>Repeat</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <Text style={tw`font-semibold text-base`}>Everyday</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              style={tw`ml-[20px]`}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
