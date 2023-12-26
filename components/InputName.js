import { View, TextInput } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import RNPickerSelect from "react-native-picker-select";
export default function InputName({
  value,
  onChangeText,
  itemsValue,
  onValueChange,
}) {
  useEffect(() => {
    console.log(itemsValue);
  }, [itemsValue]);
  return (
    <View style={tw`mt-4`}>
      <TextInput
        placeholder="Enter your task"
        style={tw`mx-5 my-3 p-4 rounded-lg text-base bg-white`}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={tw`mx-5 bg-white rounded-lg `}>
        <RNPickerSelect
          placeholder={{ label: "Select a category" }}
          value={itemsValue}
          onValueChange={onValueChange}
          items={[
            { label: "Sport", value: "Sport" },
            { label: "Eating", value: "Eating" },
          ]}
        />
        {/* <Picker value={itemsValue} onValueChange={onValueChange}>
          <Picker.Item label="Sport" value="Sport" />
          <Picker.Item label="Eating" value="Eating" />
        </Picker> */}
      </View>
    </View>
  );
}
