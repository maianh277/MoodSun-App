import { View, Text, Image, Button, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function DateTask({ function_name, icon_source }) {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode("date");
  };

  // const showTimepicker = () => {
  //   showMode("time");
  // };

  return (
    <SafeAreaView
      style={tw`flex-row items-center justify-between mx-7 mt-5 mb-3`}
    >
      <View style={tw`flex-row items-center gap-4`}>
        <Image source={icon_source} style={tw`h-8 w-8`} />
        <Text style={tw`text-base`}>{function_name}</Text>
      </View>
      <View style={tw`flex-row items-center gap-2`}>
        <Text style={tw`font-semibold`}>{date.toLocaleDateString()}</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          style={tw`ml-[20px]`}
          onPress={showDatepicker}
        />
      </View>
    </SafeAreaView>
  );
}
