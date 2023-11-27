import React from 'react';
import { View, Text, Image, Switch } from 'react-native';
import tw from 'twrnc';

const CustomizationComponent = ({ isEnabled, toggleSwitch }) => {
  return (
    <View>
      <Text style={tw`text-xl font-bold p-2 mt-4`}>Customization</Text>
      <View style={tw`mt-0`}>
        {/* Password Lock */}
        <View style={tw`py-3 border-b border-gray-200`}>
          <View style={tw`flex-row items-center p-2`}>
            <Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/locked.png')} />
            <Text style={tw`text-lg ml-4`}>Password Lock</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={tw`ml-auto`}
            />
          </View>
        </View>

        {/* Daily Reminder */}
        <View style={tw`flex-row items-center p-2`}>
          <Image style={tw`h-5 w-5`} source={require('../assets/createTaskIcon/messenger.png')} />
          <Text style={tw`text-lg ml-4`}>Daily Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={tw`ml-auto`} 
          />
        </View>
      </View>
    </View>
  );
};

export default CustomizationComponent;
