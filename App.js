import { Text, View, StatusBar } from "react-native";
import TargetPage from "./screens/TargetPage";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <HomePage /> */}
      <TargetPage />
    </View>
  );
}
