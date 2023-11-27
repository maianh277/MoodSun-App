import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import TargetPage from "../screens/TargetPage";
import SettingsScreen from "../screens/Setting";
import StatisticPage from "../screens/StatisticPage";
import CreateTaskPage from "../screens/CreateTaskPage";
import Menu from "../components/Menu";

const Tab = createBottomTabNavigator();

export default function MenuNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <Menu {...props} />}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="StatisticPage"
        component={StatisticPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CreateTaskPage"
        component={CreateTaskPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TargetPage"
        component={TargetPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
