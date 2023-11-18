import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import RNPickerSelect from "react-native-picker-select";

export default function InputName() {
  return (
    <View style={tw`mt-4`}>
      <TextInput
        placeholder="Enter your task"
        style={tw`mx-5 my-3 p-4 rounded-lg text-base bg-white`}
      />
      <View style={tw`mx-5 bg-white rounded-lg`}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Sport", value: "Sport" },
            { label: "Eating", value: "Eating" },
          ]}
        />
      </View>
    </View>
  );
}
