import { Text, View, StatusBar } from "react-native";
import TargetPage from "./screens/TargetPage";
import CreateTaskPage from "./screens/CreateTaskPage";
import CreateTaskInputPage from "./screens/CreateTaskInputPage";
export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <HomePage /> */}
      {/* <TargetPage /> */}
      {/* <CreateTaskPage /> */}
      <CreateTaskInputPage />
    </View>
  );
}
