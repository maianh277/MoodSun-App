// import { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import LoginButton from "../components/CustomButton";
// import tw from "twrnc";

// const ResetSuccessful = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigation = useNavigation();

//   const handlePasswordReset = () => {
//     if (newPassword === confirmPassword) {
//       navigation.navigate("ResetSuccessful");
//     } else {
//       alert("Passwords do not match.");
//     }
//   };

//   return (
//     <View style={tw`mt-12 px-4 py-2 bg-white`}>
//       <Text style={tw`text-3xl font-bold`}>Set New Password</Text>
//       <Text style={tw`text-slate-400 mb-4`}>
//         Please enter your new password.
//       </Text>

//       <TextInput
//         style={tw`border border-gray-300 p-4 rounded mb-4`}
//         placeholder="New Password"
//         secureTextEntry
//         onChangeText={setNewPassword}
//         value={newPassword}
//       />

//       <TextInput
//         style={tw`border border-gray-300 p-4 rounded mb-4`}
//         placeholder="Confirm Password"
//         secureTextEntry
//         onChangeText={setConfirmPassword}
//         value={confirmPassword}
//       />

//       <LoginButton
//         onLoginPress={handlePasswordReset}
//         buttonText="Reset Password"
//       />

//       <View
//         style={tw`absolute bottom-10 right-10 w-5 h-5 bg-yellow-500 rounded-full`}
//       ></View>
//       <View
//         style={tw`absolute bottom-20 right-20 w-10 h-10 bg-yellow-500 rounded-full`}
//       ></View>
//       <View
//         style={tw`absolute bottom-30 right-30 w-20 h-20 bg-yellow-500 rounded-full opacity-50`}
//       ></View>
//     </View>
//   );
// };
// export default ResetSuccessful;
