import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import CustomCalendar from "../components/CustomCalendar";
import tw from "twrnc";
import Task from "../components/Task";
import { Ionicons } from "@expo/vector-icons";
import CreateTaskInputPage from "./CreateTaskInputPage";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export default function TargetPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "task"));
      const newTasks = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(newTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTasks()
      .then(() => {
        setRefreshing(false);
      })
      .catch((error) => {
        console.error("Error during refresh:", error);
        setRefreshing(false); // Ensure to set refreshing to false in case of an error
      });
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={tw`bg-white p-2 pt-10 flex-1`}
    >
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
      <Text style={tw`ml-6 font-bold text-lg`}>Task</Text>
      <View style={tw`h-[2px] bg-gray-100 mx-4 mt-1`}></View>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            items={task.itemsValue}
            taskId={task.id}
            time={task.time}
          />
        ))}

      <CreateTaskInputPage isModal={isModalVisible} closeModal={closeModal} />
    </ScrollView>
  );
}
