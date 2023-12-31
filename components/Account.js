import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useEffect, useState } from "react";
import { auth } from "../config/FirebaseConfig";

const AccountComponent = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View>
      <Text style={tw`text-lg font-bold`}>Account</Text>
      {email ? (
        <Text style={tw`text-base mt-1`}>{email}</Text>
      ) : (
        <TouchableOpacity style={tw`border-b border-gray-200`}>
          <View style={tw`flex-row items-center p-2`}>
            <Image
              style={tw`h-5 w-5 mt-1`}
              source={require("../assets/createTaskIcon/account.png")}
            />
            <Text style={tw`text-lg ml-4`}>Login/Sign up</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AccountComponent;
