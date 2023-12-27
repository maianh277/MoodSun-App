import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const ServiceCenterComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={tw`text-lg mt-3 font-bold`}>Service Center</Text>
      <View style={tw`mt-2`}>
        <TouchableOpacity
          style={tw`pb-1 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Text style={tw`text-lg`}>Contact us</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-2 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("TermsOfService")}
        >
          <Text style={tw`text-lg`}>Terms of Service</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-2 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("TermsOfService")}
        >
          <Text style={tw`text-lg`}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCenterComponent;
