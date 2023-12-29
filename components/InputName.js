import { View, TextInput } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
// import RNPickerSelect from "react-native-picker-select";
import { Dropdown } from "react-native-element-dropdown";
export default function InputName({
  value,
  onChangeText,
  itemsValue,
  onValueChange,
}) {
  useEffect(() => {
    console.log(itemsValue);
  });
  const dropdownItems = [
    { label: "Sport", value: "Sport" },
    { label: "Eating", value: "Eating" },
  ];
  return (
    <View style={tw`mt-4`}>
      <TextInput
        placeholder="Enter your task"
        style={tw`mx-5 my-3 p-4 rounded-lg text-base bg-white`}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={tw`mx-5 bg-white rounded-lg h-15 p-3`}>
        <Dropdown
          value={itemsValue}
          onChange={(item) => onValueChange(item.value)}
          data={dropdownItems}
          maxHeight={300}
          labelField="label"
          valueField="value"
        />
        {/* <RNPickerSelect
          value={itemsValue}
          onValueChange={onValueChange}
          items={value}
        /> */}
      </View>
    </View>
  );
}
