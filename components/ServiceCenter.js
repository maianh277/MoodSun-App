import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const ServiceCenterComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={tw`text-lg mt-5 font-bold`}>Service Center</Text>
      <View style={tw`mt-3`}>
        <TouchableOpacity
          style={tw`pb-3 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("ContactUs")}
        >
          <Text style={tw`text-base`}>Contact us</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("TermsOfService")}
        >
          <Text style={tw`text-base`}>Terms of Service</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`py-3 border-b border-gray-200 flex-row justify-between items-center`}
          onPress={() => navigation.navigate("TermsOfService")}
        >
          <Text style={tw`text-base`}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="#A1A1A1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCenterComponent;
