import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomCalendar from "../components/CustomCalendar";
import tw from "twrnc";
import Task from "../components/Task";
import { Ionicons } from "@expo/vector-icons";
import CreateTaskPage from "../screens/CreateTaskPage";
import CreateTaskInputPage from "./CreateTaskInputPage";

export default function TargetPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={tw`bg-white p-2 pt-10 flex-1`}>
      <View style={tw`flex-row justify-between items-center mx-5`}>
        <Text style={tw`font-bold text-xl my-3 `}>Your To-do Lists</Text>
        <TouchableOpacity
          style={tw`bg-orange-500 rounded-full w-10 h-10 justify-center items-center`}
          onPress={openModal}
        >
          <Ionicons name="add-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <CustomCalendar />
      </View>
      <Text style={tw`ml-6 font-bold text-xl mt-2`}>Task</Text>
      <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
      <Task />
      <CreateTaskInputPage isModal={isModalVisible} closeModal={closeModal} />
    </View>
  );
}
