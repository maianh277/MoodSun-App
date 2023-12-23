import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomCalendar from "../components/CustomCalendar";
import tw from "twrnc";
import Task from "../components/Task";
import { Ionicons } from "@expo/vector-icons";
import CreateTaskInputPage from "./CreateTaskInputPage";
import {
  collection,
  getDocs,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { getAuth } from "firebase/auth";

export default function TargetPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [totalTask, setTotalTask] = useState(0);
  const [doneTask, setDoneTask] = useState(0);
  const [allTaskDate, setAllTaskDate] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  // Email người dùng hiện tại
  const userEmail = getAuth().currentUser.email;

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const formattedDate = selectedDate.replace(/-/g, "/");

  // fetch task
  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, "task"),
          where("account", "==", userEmail),
          where("date", "==", formattedDate)
        )
      );

      const newTasks = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(newTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  //Check những ngày có task
  const fetchTasksDate = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "task"), where("account", "==", userEmail))
      );

      const newTasks = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const allDates = newTasks.map((task) => task.date.replace(/\//g, "-"));
      setAllTaskDate(allDates);
      console.log(allDates);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Total task
  const fetchCount = async () => {
    try {
      const taskRef = query(
        collection(db, "task"),
        where("account", "==", userEmail),
        where("date", "==", formattedDate)
      );
      const snapshot = await getCountFromServer(taskRef);
      const count = snapshot.data().count;
      setTotalTask(count);
      // console.log("Number of all task", count);
    } catch (error) {
      console.log(error);
    }
  };

  // Done task
  const fetchDoneCount = async () => {
    try {
      const taskRef = collection(db, "task");
      //run aggregrate query
      const querySnapshot = await getDocs(
        query(taskRef, where("done", "==", 1)),
        where("date", "==", formattedDate)
      );
      const doneCount = querySnapshot.docs.length;
      setDoneTask(doneCount);
      // console.log("Number of done task", doneCount);
    } catch (error) {
      console.log(error);
    }
  };

  // refresh the to fetch new data
  const updateTasks = async () => {
    await fetchTasksDate();
    await fetchTasks();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCount();
      await fetchDoneCount();
      await fetchTasks();
    };
    fetchData();
  }, [selectedDate]);

  return (
    <ScrollView style={tw`bg-white p-2 pt-10 flex-1`}>
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
        <CustomCalendar
          selected={selectedDate}
          setSelected={setSelectedDate}
          onDateSelect={(date) => setSelectedDate(date)}
          allTaskDate={allTaskDate}
          fetchTasksDate={fetchTasksDate}
        />
      </View>
      <View style={tw`flex-row items-center justify-between mx-6 `}>
        <Text style={tw`font-bold text-lg`}>Task</Text>
        <Text style={tw`font-bold text-lg`}>
          {doneTask}/{totalTask}
        </Text>
      </View>

      <View style={tw`h-[2px] bg-gray-100 mx-4 mt-1`}></View>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            items={task.itemsValue}
            taskId={task.id}
            date={task.date}
            updateTasks={updateTasks}
            done={task.done}
            fetchDoneCount={fetchDoneCount}
            fetchCount={fetchCount}
          />
        ))}

      <CreateTaskInputPage
        isModal={isModalVisible}
        closeModal={closeModal}
        updateTasks={updateTasks}
        fetchCount={fetchCount}
        allTaskDate={allTaskDate}
        setAllTaskDate={setAllTaskDate}
      />
    </ScrollView>
  );
}
