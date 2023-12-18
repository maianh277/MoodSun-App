import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function EmotionPick({ bgColor, onEmotionSelected }) {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleSelectedEmotion = (emotion) => {
    setSelectedEmotion(emotion);
    onEmotionSelected(emotion);
  };

  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>How was your day?</Text>
        <View style={tw`flex-row justify-center`}>
          <TouchableOpacity onPress={() => handleSelectedEmotion("happy")}>
            <Image
              style={[
                tw`h-16 w-16`,
                selectedEmotion === "happy"
                  ? tw`bg-orange-100 rounded-lg`
                  : null,
              ]}
              source={require("../assets/emoji/happy.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("normal")}>
            <Image
              style={[
                tw`h-16 w-16`,
                selectedEmotion === "normal"
                  ? tw`bg-orange-100 rounded-lg`
                  : null,
              ]}
              source={require("../assets/emoji/normal.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("sad")}>
            <Image
              style={[
                tw`h-16 w-16`,
                selectedEmotion === "sad" ? tw`bg-orange-100 rounded-lg` : null,
              ]}
              source={require("../assets/emoji/sad.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("cry")}>
            <Image
              style={[
                tw`h-16 w-16`,
                selectedEmotion === "cry" ? tw`bg-orange-100 rounded-lg` : null,
              ]}
              source={require("../assets/emoji/cry.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("angry")}>
            <Image
              style={[
                tw`h-16 w-16`,
                selectedEmotion === "angry"
                  ? tw`bg-orange-100 rounded-lg`
                  : null,
              ]}
              source={require("../assets/emoji/angry.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
