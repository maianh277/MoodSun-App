import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { Swipeable } from "react-native-gesture-handler";
import { deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export default function Task({
  taskName,
  date,
  items,
  taskId,
  updateTasks,
  done,
  fetchDoneCount,
  fetchCount,
}) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = async () => {
    try {
      await updateDoc(doc(db, "task", taskId), {
        done: checked ? 0 : 1,
      });
      console.log(done);
      fetchDoneCount();
      updateTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }

    setChecked(!checked);
  };
  useEffect(() => {
    setChecked(done === 1);
  }, [done]);

  const deleteTask = async () => {
    try {
      await deleteDoc(doc(db, "task", taskId));
      ToastAndroid.show("Task deleted successfully", ToastAndroid.LONG);
      // console.log("Task deleted successfully");
      updateTasks();
      fetchCount();
      fetchDoneCount();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const RightActions = () => {
    return (
      <View style={tw`flex-row items-center justify-around`}>
        <TouchableOpacity style={tw`mr-5`} onPress={deleteTask}>
          <Ionicons name="trash-outline" size={25} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={RightActions}>
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
            <Text
              style={[
                tw`text-lg font-semibold`,
                {
                  color: done === 1 ? "#8F8F8F" : "#2D2D2D",
                  textDecorationLine: done === 1 ? "line-through" : "none",
                },
              ]}
            >
              {taskName}
            </Text>
            <Text
              style={[
                tw`text-sm`,
                {
                  color: "#515070",
                  color: done === 1 ? "#8F8F8F" : "#2D2D2D",
                  textDecorationLine: done === 1 ? "line-through" : "none",
                },
              ]}
            >
              {items} at {date}
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`h-[2px] bg-gray-100 mx-4`}></View>
    </Swipeable>
  );
}
