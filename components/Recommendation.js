import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { emotionsWeatherImages } from "../path/images";
import { emotionColors } from "../path/color";
import { useNavigation } from "@react-navigation/native";
export default function Recommendation({ maxEmotion, month }) {
  const [weather, setWeather] = useState("");
  const imageEmotions = emotionsWeatherImages[maxEmotion];
  const color = emotionColors[maxEmotion];
  const navigation = useNavigation();
  useEffect(() => {
    switch (maxEmotion) {
      case "happy":
        setWeather("Sunny");
        break;
      case "normal":
        setWeather("Partly Cloudy");
        break;
      case "sad":
        setWeather("Cloudy");
        break;
      case "cry":
        setWeather("Rain");
        break;
      case "angry":
        setWeather("Storm");
        break;
    }
    console.log(color);
  }, [maxEmotion]);
  return (
    <View>
      <View
        style={tw`${
          color ? `bg-[${color}]` : "bg-blue-100"
        } rounded-lg shadow-lg w-90 m-auto mt-4 mb-4`}
      >
        <TouchableOpacity
          style={tw`flex-row items-center mt-3`}
          onPress={
            maxEmotion
              ? () => navigation.navigate("RecommendPage", { maxEmotion })
              : undefined
          }
        >
          <Text style={tw`ml-4 mr-2 font-bold text-lg`}>Your Mood Weather</Text>
          <FontAwesome5 name="chevron-right" />
        </TouchableOpacity>

        <View style={tw`flex-row rounded-lg my-2 p-3 bg-white mx-3`}>
          {!maxEmotion ? (
            <Text>Does not have data. Please input emotion.</Text>
          ) : (
            <>
              <Image source={imageEmotions} style={tw`h-20 w-20`} />
              <View>
                <View style={tw`ml-3 `}>
                  <Text style={tw`text-2xl font-bold`}>{weather}</Text>
                  <Text style={tw`w-50`}>
                    In this {month}, most of time you were
                    <Text style={tw`font-bold`}> {maxEmotion}</Text>
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
