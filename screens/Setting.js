import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Account from '../components/Account';
import Customization from '../components/Customization';
import ServiceCenter from '../components/ServiceCenter';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={tw`bg-white p-4 pt-12`}>
      <Text style={tw`text-3xl text-center font-bold  mb-2`}>Settings</Text>
      <Account />
      <Customization isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <ServiceCenter />
    </View>
  );
};

export default SettingsScreen;
