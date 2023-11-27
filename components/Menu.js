import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Menu({ state, navigation }) {
  const routeNames = [
    "HomePage",
    "StatisticPage",
    "CreateTaskPage",
    "TargetPage",
    "SettingsScreen",
  ];

  const getIconName = (routeName, focused) => {
    switch (routeName) {
      case "HomePage":
        return "home";
      case "StatisticPage":
        return "chart-pie";
      case "TargetPage":
        return "tasks";
      case "CreateTaskPage":
        return "plus";
      case "SettingsScreen":
        return "cog";
      default:
        return "home";
    }
  };

  const onPress = (routeName) => {
    if (routeName === "CreateTaskPage") {
      navigation.navigate(routeName, { isModal: true });
    } else {
      navigation.navigate(routeName);
    }
  };

  return (
    <View
      style={tw`flex-row justify-around items-center bg-[#F4EDE3] w-full h-20`}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const routeName = routeNames[index];
        const iconName = getIconName(routeName, isFocused);

        const plusIconStyle =
          routeName === "CreateTaskPage"
            ? {
                backgroundColor: "black",
                borderRadius: 50,
                paddingHorizontal: 20,
                paddingVertical: 18,
              }
            : null;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(routeName)}
            style={tw`flex-1 items-center`}
          >
            {routeName === "CreateTaskPage" ? (
              <View style={plusIconStyle}>
                <FontAwesome5
                  name={iconName}
                  size={24}
                  color={isFocused ? "orange" : "white"}
                />
              </View>
            ) : (
              <FontAwesome5
                name={iconName}
                size={24}
                color={isFocused ? "orange" : "gray"}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
