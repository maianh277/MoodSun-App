import React from "react";
import HomePage from "../screens/HomePage";
import SettingsScreen from "../screens/Setting";
import TargetPage from "../screens/TargetPage";
import Login from "../screens/Login";
import PassLock from "../screens/PassLock";
import ResetPass from "../screens/ResetPass";
import { createStackNavigator } from "@react-navigation/stack";
import MenuNavigator from "./MenuNavigator";
import StatisticPage from "../screens/StatisticPage";
import SignUp from "../screens/SignUp";
import TermsOfService from "../screens/TermsOfService";
import CreateTaskInputPage from "../screens/CreateTaskInputPage";
import ContactUs from "../screens/ContactUs";
import RecommendPage from "../screens/RecommendPage";
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Menu"
        component={MenuNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateTaskInputPage"
        component={CreateTaskInputPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Statistic"
        component={StatisticPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Passlock"
        component={PassLock}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TargetPage"
        component={TargetPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendPage"
        component={RecommendPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
