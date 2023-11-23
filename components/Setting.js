import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity,Image } from 'react-native';
import tw from 'twrnc';

const SettingsScreen = () => {
  const [isPasswordLockEnabled, setIsPasswordLockEnabled] = useState(false);
  const [isDailyReminderEnabled, setIsDailyReminderEnabled] = useState(false);

  const toggleSwitch = (setter) => setter(previousState => !previousState);

  return (
    <View style={tw`bg-white p-4 pt-12`}>
      {/* Section Headers */}
      <Text style={tw`text-xl font-bold p-2`}>Account</Text>
      {/* Account Section */}
      <TouchableOpacity style={tw`py-3 border-b border-gray-200`}>
     
        <Text style={tw`text-lg ml-4` }><Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/account.png')}/>Login/Sign up</Text>
      </TouchableOpacity>

      <Text style={tw`text-xl font-bold p-2 mt-4`}>Customization</Text>
      {/* Customization Section */}
      <View style={tw`mt-2`}>
        <View style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}>
          <Text style={tw`text-lg ml-4`}><Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/locked.png')}/>Password Lock</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPasswordLockEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(setIsPasswordLockEnabled)}
            value={isPasswordLockEnabled}
          />
        </View>
        <View style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}>
          <Text style={tw`text-lg ml-4`}><Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/messenger.png')}/>Daily Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDailyReminderEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(setIsDailyReminderEnabled)}
            value={isDailyReminderEnabled}
          />
        </View>
      </View>

      <Text style={tw`text-xl font-bold p-2 mt-4`}>Service Center</Text>
      {/* Service Center Section */}
      <View style={tw`mt-2`}>
        <TouchableOpacity style={tw`py-3 border-b border-gray-200`}>
          <Text style={tw`text-lg ml-4`}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-3 border-b border-gray-200`}>
          <Text style={tw`text-lg ml-4`}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-3 border-b border-gray-200`}>
          <Text style={tw`text-lg ml-4`}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;
