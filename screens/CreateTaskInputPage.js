import React, { useEffect, useState } from "react";
import { View, Dimensions, Modal } from "react-native";
import CreateTaskTitle from "../components/CreateTaskTitle";
import InputName from "../components/InputName";
import TimeAndReminderTask from "../components/TimeAndReminderTask";
import DateTask from "../components/DateTask";
import Reminder from "../components/Reminder";
import CustomButtom from "../components/CustomButton";
import tw from "twrnc";
import { collection, addDoc, docRef } from "firebase/firestore";
const { height, width } = Dimensions.get("window");
import { db } from "../config/FirebaseConfig";
export default function CreateTaskInputPage({ isModal, closeModal }) {
  if (!isModal) {
    return null;
  }
  const [taskName, setTaskName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [itemsValue, setItemsValue] = useState("");
  const createTask = async () => {
    await addDoc(collection(db, "task"), {
      taskName: taskName,
      itemsValue: itemsValue,
      reminder: isEnabled,
    })
      .then(() => {
        console.log("Add data successful");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal visible={isModal} animationType="slide">
      <View style={{ height, width, backgroundColor: "#F4EDE3" }}>
        <CreateTaskTitle onButtonPress={closeModal} />
        <InputName
          itemsValue={itemsValue}
          value={taskName}
          onChangeText={(taskName) => {
            setTaskName(taskName);
          }}
          onValueChange={(itemsValue) => {
            setItemsValue(itemsValue);
          }}
        />
        <View style={tw`bg-white mt-3 mx-5 rounded-lg mb-4`}>
          <TimeAndReminderTask />
          <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
          <DateTask
            function_name="Start Date"
            icon_source={require("../assets/createTaskIcon/start_day.png")}
          />
          <View style={tw`h-[1.5px] bg-gray-100 mx-6 mt-1`}></View>
          <Reminder isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        </View>
        <View style={tw`mx-5`}>
          <CustomButtom buttonText="Done" onLoginPress={createTask} />
        </View>
      </View>
    </Modal>
  );
}
