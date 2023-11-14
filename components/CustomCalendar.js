import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Calendar } from "react-native-calendars";

export default function CustomCalendar() {
  const [selected, setSelected] = useState("");
  return (
    <View>
      <Calendar
        theme={{
          todayTextColor: "#FF8E6E",
          selectedDayBackgroundColor: "#2D2D2D",
          selectedDayTextColor: "#ffffff",
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
