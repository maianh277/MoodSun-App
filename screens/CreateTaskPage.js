// import React from "react";
// import { View, Text, Dimensions, Modal, StatusBar } from "react-native";
// import CreateTaskTitle from "../components/CreateTaskTitle";
// import TaskSelection from "../components/TaskSelection";
// import tw from "twrnc";
// import { useNavigation } from "@react-navigation/native";
// const { height, width } = Dimensions.get("window");

// export default function CreateTaskPage({ isModal, closeModal }) {
//   const navigation = useNavigation();
//   return (
//     <Modal visible={isModal} animationType="slide">
//       <View
//         style={{
//           height: height + StatusBar.currentHeight,
//           width,
//           backgroundColor: "#F4EDE3",
//         }}
//       >
//         <CreateTaskTitle onButtonPress={closeModal} />
//         <Text style={[tw`mx-4 text-lg font-bold mt-5`, { color: "#6A6A6A" }]}>
//           Select your task
//         </Text>
//         <TaskSelection
//           task_name="Regular Habit"
//           icon_source={require("../assets/createTaskIcon/regular_habit.png")}
//           onPress={() => navigation.navigate("CreateTaskInputPage")}
//         />
//         <TaskSelection
//           task_name="One Time Task"
//           icon_source={require("../assets/createTaskIcon/one_time_task.png")}
//         />
//       </View>
//     </Modal>
//   );
// }
