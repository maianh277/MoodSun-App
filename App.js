import { Text, View, StatusBar } from "react-native";
import tw from "twrnc";
import Menu from "./components/Menu";
export default function App() {
  return (
    <View>
      <Menu></Menu>
      <StatusBar style="auto" />
    </View>
  );
}
