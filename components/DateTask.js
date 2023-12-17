import {
  View,
  TouchableOpacity,
  Text,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import tw from "twrnc";
import DatePicker from "react-native-modern-datepicker";
export default DateTask = ({ selectedDate, setSelectedDate }) => {
  return (
    <SafeAreaView>
      <DatePicker
        mode="calendar"
        onSelectedChange={(date) => setSelectedDate(date)}
      />
      <Text style={tw`text-center`}>Date Selected: {selectedDate}</Text>
    </SafeAreaView>
  );
};
