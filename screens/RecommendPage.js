import { View, TouchableOpacity, Text, Linking } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import tw from "twrnc";
import { Card } from "@rneui/themed";
import { emotionsPaper } from "../path/paper";
export default function RecommendPage({ route, navigation }) {
  const { maxEmotion } = route.params;
  const paperRecommend = emotionsPaper[maxEmotion];

  if (!paperRecommend) {
    console.error(`No papers found for emotion: ${maxEmotion}`);
    return null;
  }

  useEffect(() => {
    console.log(paperRecommend);
  }, []);
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`bg-[#F4EDE3]`}>
        <View style={tw`mt-10 w-10 mx-6 bg-white p-2 rounded-lg`}>
          <TouchableOpacity
            style={tw`m-auto`}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="chevron-left" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={tw`font-bold text-3xl mx-6 mt-5`}>Recommendation</Text>
        <Text style={tw`text-sm mb-5 mx-6 `}>
          We see that you were {maxEmotion} these days, so we recommend you some
          papers
        </Text>
      </View>
      {paperRecommend &&
        paperRecommend.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => Linking.openURL(item.url)}
          >
            <Card
              containerStyle={{
                shadowColor: "rgba(0,0,0, 0.0)",
                borderRadius: 10,
              }}
            >
              <Card.Image source={{ uri: item.image }} />
              <Card.Divider />
              <Card.Title>{item.title}</Card.Title>
            </Card>
          </TouchableOpacity>
        ))}
    </View>
  );
}
