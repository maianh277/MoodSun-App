import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
const TermsOfService = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={tw`bg-white`}>
      <View>
        <View style={tw`bg-[#F4EDE3]`}>
          <View style={tw`mt-10 w-10 mx-6 bg-white p-2 rounded-lg`}>
            <TouchableOpacity
              style={tw`m-auto`}
              onPress={() => navigation.goBack()}
            >
              <FontAwesome5 name="chevron-left" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={tw`font-bold text-3xl mx-6 mt-5`}>Terms of Service</Text>
          <Text style={tw`text-sm mb-5 mx-6 `}>
            These are the terms and conditions of our app. By using this app,
            you agree to abide by all these terms and conditions.
          </Text>
        </View>
        <View style={tw`mx-6`}>
          <Text style={tw`text-base font-bold mt-4`}>
            1. Acceptance of Terms
          </Text>
          <Text style={tw`text-base`}>
            By accessing and using the Mood Note mobile application (the “App”),
            you agree to comply with and be bound by the following Terms of Use.
            If you do not agree to these terms, please do not use the App.
          </Text>
          <Text style={tw`text-base font-bold`}>2. User Registration</Text>
          <Text style={tw` text-base`}>
            2.1. You may be required to create an account to use certain
            features of the App. You are responsible for maintaining the
            confidentiality of your account information and are solely
            responsible for all activities that occur under your account.{"\n"}
            2.2. You must be at least 13 years old to use the App. If you are
            under 13, you may only use the App with the consent of a parent or
            legal guardian.
          </Text>
          <Text style={tw`text-base font-bold`}>3. App Content</Text>
          <Text style={tw` text-base`}>
            3.1. All content within the App, including but not limited to text,
            images, and audio, is for informational purposes only. We do not
            guarantee the accuracy, completeness, or reliability of this
            content.
          </Text>
          <Text style={tw`text-base font-bold`}>4. Privacy</Text>
          <Text style={tw` text-base`}>
            4.1. We respect your privacy and handle your personal information in
            accordance with our Privacy Policy.
          </Text>
          <Text style={tw`text-base font-bold`}>5. Prohibited Activities</Text>
          <Text style={tw` text-base`}>
            You agree not to engage in any of the following activities while
            using the App: 5.1. Violating any applicable laws or regulations.
            5.2. Uploading or sharing any content that is harmful, abusive, or
            offensive. 5.3. Attempting to disrupt or compromise the security of
            the App. 5.4. Using the App for any commercial purposes without our
            prior written consent.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsOfService;
