import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import SplashScreen from "./screens/SplashScreen";
import registerNNPushToken from "native-notify";

export default function App() {
  registerNNPushToken(17058, "ObOAeZY8EmMaLS80Hz8j5Z");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
