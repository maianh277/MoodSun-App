import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { Swipeable } from "react-native-gesture-handler";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export default function Task({ taskName, time, items, taskId }) {
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const deleteTask = () => {
    deleteDoc(doc(db, "task", taskId))
      .then(() => {
        console.log("Task deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const RightActions = () => {
    return (
      <View style={tw`flex-row items-center justify-around`}>
        <TouchableOpacity style={tw`mr-5`}>
          <Ionicons
            name="trash-outline"
            size={25}
            onPress={() => deleteTask(taskId)}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <View>
          <View style={tw`flex-row items-center ml-5 my-2`}>
            <CheckBox
              checked={checked}
              onPress={toggleCheckbox}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor="orange"
            />
            <View style={tw`flex-row items-center justify-around`}>
              <View>
                <Text style={[tw`text-lg font-semibold`, { color: "#2D2D2D" }]}>
                  {taskName}
                </Text>
                <Text style={[tw`text-sm`, { color: "#515070" }]}>
                  {items} at {time}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
      <View style={tw`h-[2px] bg-gray-100 mx-4`}></View>
    </View>
  );
}
