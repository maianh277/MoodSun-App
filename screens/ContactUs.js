import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function ContactUs() {
  const navigation = useNavigation();
  const openGitHub = () => {
    Linking.openURL("https://github.com/maianh277/MoodSun-App");
  };

  return (
    <View style={tw`flex-1 p-4 pt-10 bg-white`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mx-3`}>
        <FontAwesome5 name="chevron-left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={tw`text-xl font-bold  text-center`}>Hi, meet our Dev</Text>

      <Card containerStyle={tw`mb-4 rounded-lg`}>
        <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`text-lg font-bold`}>Do Tran Mai Anh</Text>
            <Text style={tw`text-gray-600`}>aka MA</Text>
            <Text style={tw`text-gray-700 mb-2`}>Introvert.</Text>
            <Image
              source={require("../assets/createTaskIcon/facebook.png")}
              style={tw`h-5 w-5 mr-2`}
            />
          </View>
          <Image
            style={tw`h-30 w-30`}
            source={require("../assets/dev/Manh.jpg")}
          ></Image>
        </View>
      </Card>

      <Card containerStyle={tw`mb-4 rounded-lg`}>
        <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`text-lg font-bold`}>Pham Nguyen Nam</Text>
            <Text style={tw`text-gray-600`}>aka Nam Phạm</Text>
            <Text style={tw`text-gray-700 mb-2`}>Kindly and talkative.</Text>
            <Image
              source={require("../assets/createTaskIcon/facebook.png")}
              style={tw`h-5 w-5 mr-2`}
            />
          </View>
          <Image
            style={tw`h-30 w-30`}
            source={require("../assets/dev/Nam.jpg")}
          ></Image>
        </View>
      </Card>

      <TouchableOpacity style={tw`flex-row items-center justify-center mt-2`}>
        <Icon name="github" size={20} color="#24292e" onPress={openGitHub} />
        <Text style={tw`text-lg font-bold ml-2`}>GitHub for MoodSun</Text>
      </TouchableOpacity>
    </View>
  );
}
