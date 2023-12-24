import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Account from "../components/Account";
import Customization from "../components/Customization";
import ServiceCenter from "../components/ServiceCenter";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/FirebaseConfig";
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";
// import Constants from "expo-constants";
const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
        navigation.replace("Login");
      }
    });
    return unsubscribe;
  }, []);
  const handleLogout = () => {
    console.log("Logging out...");
    auth
      .signOut()
      .then(
        () => console.log("Sign out successful"),
        navigation.navigate("Login")
      )
      .catch((error) => {
        console.error("Error signing out: ", error.code, error.message);
      });
  };
  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);
  return (
    <View style={tw`bg-white p-7 pt-10 flex-1`}>
      <Text style={tw`text-3xl text-center font-bold  mb-2`}>Settings</Text>
      <Account />
      <Text>Your expo push token: {expoPushToken}</Text>
      <Customization isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <ServiceCenter />
      {email ? (
        <TouchableOpacity
          onPress={handleLogout}
          style={tw`mt-3 items-center bg-[#FF9560] p-3 mx-20 rounded-lg`}
        >
          <Text style={tw`text-lg font-semibold text-white`}>Log out</Text>
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
  );
};
// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: "Here is the notification body",
//       data: { data: "goes here" },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== "granted") {
//       alert("Failed to get push token for push notification!");
//       return;
//     }
//     // Learn more about projectId:
//     // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
//     token = await Notifications.getExpoPushTokenAsync({
//       projectId: Constants.expoConfig.extra.eas.projectId,
//     });
//     console.log(token);
//   } else {
//     alert("Must use physical device for Push Notifications");
//   }

//   return token;
// }
export default SettingsScreen;
