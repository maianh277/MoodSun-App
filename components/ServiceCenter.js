import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

const ServiceCenterComponent = () => {
  return (
    <View>
      <Text style={tw`text-xl font-bold p-2`}>Service Center</Text>
      <View style={tw`mt-2`}>
        <TouchableOpacity style={tw`pb-2 border-b border-gray-200 flex-row justify-between items-center`}>
          <Text style={tw`text-lg ml-4`}>Contact us</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}>
          <Text style={tw`text-lg ml-4`}>Terms of Service</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}>
          <Text style={tw`text-lg ml-4`}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCenterComponent;
