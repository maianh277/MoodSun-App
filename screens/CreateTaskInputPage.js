// Trang tiep theo cua CreateTaskPage
import { View, Text, Dimensions } from "react-native";
import React from "react";
import CreateTaskTitle from "../components/CreateTaskTitle";
import InputName from "../components/InputName";
import TimeAndReminderTask from "../components/TimeAndReminderTask";
import DateTask from "../components/DateTask";
import Reminder from "../components/Reminder";
import tw from "twrnc";

const { height, width } = Dimensions.get("window");
export default function CreateTaskInputPage() {
  return (
    <View style={{ height, width, backgroundColor: "#F4EDE3" }}>
      <CreateTaskTitle />
      <InputName />
      <View style={tw`bg-white mt-3 mx-5 rounded-lg`}>
        <TimeAndReminderTask />
        <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
        <DateTask
          function_name="Start Date"
          icon_source={require("../assets/createTaskIcon/start_day.png")}
        />
        <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
        <DateTask
          function_name="End Date"
          icon_source={require("../assets/createTaskIcon/end_day.png")}
        />
        <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
        <Reminder />
      </View>
    </View>
  );
}
