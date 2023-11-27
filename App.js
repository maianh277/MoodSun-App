import { Text, View, StatusBar } from "react-native";
import SignUpScreen from "./screens/Create";
import ResetPasswordScreen from "./screens/ResetPass";
import SettingsScreen from "./screens/Setting";


export default function App() {
  return (
    <View>
      {/* <SignUpScreen></SignUpScreen> */}
{/* <ResetPasswordScreen></ResetPasswordScreen> */}
<SettingsScreen></SettingsScreen>
    </View>
  );
}
