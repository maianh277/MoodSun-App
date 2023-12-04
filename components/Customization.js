import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import tw from 'twrnc';

const CustomizationComponent = () => {
  const [passwordLockEnabled, setPasswordLockEnabled] = useState(false);
  const [dailyReminderEnabled, setDailyReminderEnabled] = useState(false);

  const togglePasswordLockSwitch = () => {
    setPasswordLockEnabled(!passwordLockEnabled);
  };

  const toggleDailyReminderSwitch = () => {
    setDailyReminderEnabled(!dailyReminderEnabled);
  };

  return (
    <View>
      <Text style={tw`text-xl font-bold p-2 mt-4`}>Customization</Text>
      <View style={tw`mt-0`}>
        
        <View style={tw`py-3 border-b border-gray-200`}>
          <View style={tw`flex-row items-center p-2`}>
            <Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/locked.png')} />
            <Text style={tw`text-lg ml-4`}>Password Lock</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#ffbc5d" }}
              thumbColor={passwordLockEnabled ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePasswordLockSwitch}
              value={passwordLockEnabled}
              style={tw`ml-auto`}
            />
          </View>
        </View>

        
        <View style={tw`flex-row items-center p-2`}>
          <Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/messenger.png')} />
          <Text style={tw`text-lg ml-4`}>Daily Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#ffbc5d" }}
            thumbColor={dailyReminderEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDailyReminderSwitch}
            value={dailyReminderEnabled}
            style={tw`ml-auto`} 
          />
        </View>
      </View>
    </View>
  );
};

export default CustomizationComponent;
