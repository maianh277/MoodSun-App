import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import tw from "twrnc";

export default function CustomCalendar() {
  const [selected, setSelected] = useState("");
  return (
    <View>
      <Calendar
        style={tw`mx-3`}
        theme={{
          todayTextColor: "#FF8E6E",
          selectedDayBackgroundColor: "#2D2D2D",
          selectedDayTextColor: "#ffffff",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
          textMonthFontSize: 18,
          arrowColor: "#FF8E6E",
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
    </View>
  );
}
