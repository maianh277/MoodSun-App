import { Text, View, StatusBar } from "react-native";
import tw from "twrnc";
import Menu from "./components/Menu";
import CustomCalendar from "./components/CustomCalendar";
import HomePage from "./screens/HomePage";

export default function App() {
  return (
    <View>
      {/* <Menu></Menu> */}
      {/* <CustomCalendar /> */}
      <StatusBar style="auto" />
      <HomePage />
    </View>
  );
}
