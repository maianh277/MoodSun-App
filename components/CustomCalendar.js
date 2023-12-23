import { View, Text } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { Calendar } from "react-native-calendars";
import tw from "twrnc";

export default function CustomCalendar({
  selected,
  setSelected,
  onDateSelect,
  allTaskDate,
  fetchTasksDate,
}) {
  const [markedDates, setMarkedDates] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasksDate();
      setDataFetched(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dataFetched) {
      const marked = {};
      allTaskDate?.forEach((date) => {
        marked[date] = { marked: true, dotColor: "orange" };
      });
      setMarkedDates(marked);
    }
  }, [dataFetched, allTaskDate]);

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
          onDateSelect(day.dateString);
        }}
        markedDates={{
          ...markedDates,
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
        // markedDates={markedDates}
      />
    </View>
  );
}
