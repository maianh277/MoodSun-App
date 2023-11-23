import { Text, View, StatusBar } from "react-native";
import TargetPage from "./screens/TargetPage";
import CreateTaskPage from "./screens/CreateTaskPage";
import CreateTaskInputPage from "./screens/CreateTaskInputPage";
import SettingsScreen from "./components/Setting";
import LoginScreen from "./components/Login";
import SignUpScreen from "./components/Create";
import ResetPasswordScreen from "./components/ResetPass";
import VerificationScreen from "./components/ResetPass2";
import LoginScreen1 from "./components/PassLock";
export default function App() {
  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      {/* <HomePage /> */}
      {/* <TargetPage /> */}
      {/* <CreateTaskPage /> */}
      {/* <CreateTaskInputPage /> */}
      {/* <SettingsScreen></SettingsScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      <SignUpScreen></SignUpScreen>
      {/* <ResetPasswordScreen></ResetPasswordScreen> */}
      {/* <VerificationScreen></VerificationScreen> */}
      {/* <LoginScreen1></LoginScreen1> */}
    </View>
  );
}
