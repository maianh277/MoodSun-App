import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
export default function EmotionDetailPick({
  bgColor,
  onEmotionDetailSelected,
}) {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const handleSelectedEmotion = (emotion) => {
    setSelectedEmotion(emotion);
    onEmotionDetailSelected(emotion);
  };

  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>Emotions</Text>
        <View style={tw`flex-row justify-between mx-6 my-3`}>
          <TouchableOpacity onPress={() => handleSelectedEmotion("excited")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/excited.png")}
              />
              <Text
                style={selectedEmotion === "excited" ? tw`font-bold` : null}
              >
                Excited
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("relax")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/relax.png")}
              />
              <Text style={selectedEmotion === "relax" ? tw`font-bold` : null}>
                Relaxed
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("proud")}>
            <View style={tw`flex-col items-center `}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/proud.png")}
              />
              <Text style={selectedEmotion === "proud" ? tw`font-bold` : null}>
                Proud
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("hopeful")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/hopeful.png")}
              />
              <Text
                style={selectedEmotion === "hopeful" ? tw`font-bold` : null}
              >
                Hopeful
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-between mx-6`}>
          <TouchableOpacity onPress={() => handleSelectedEmotion("happy")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/happy.png")}
              />
              <Text style={selectedEmotion === "happy" ? tw`font-bold` : null}>
                Happy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("sad")}>
            <View style={tw`flex-col items-center ml-3`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/sad.png")}
              />
              <Text style={selectedEmotion === "sad" ? tw`font-bold` : null}>
                Sad
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("refreshed")}>
            <View style={tw`flex-col items-center `}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/refreshed.png")}
              />
              <Text
                style={selectedEmotion === "refreshed" ? tw`font-bold` : null}
              >
                Refreshed
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("gloomy")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/gloomy.png")}
              />
              <Text style={selectedEmotion === "gloomy" ? tw`font-bold` : null}>
                Gloomy
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row justify-between mx-6 mb-4`}>
          <TouchableOpacity onPress={() => handleSelectedEmotion("angry")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/angry.png")}
              />
              <Text style={selectedEmotion === "angry" ? tw`font-bold` : null}>
                Angry
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("lonely")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/lonely.png")}
              />
              <Text style={selectedEmotion === "lonely" ? tw`font-bold` : null}>
                Lonely
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("tired")}>
            <View style={tw`flex-col items-center `}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/tired.png")}
              />
              <Text style={selectedEmotion === "tired" ? tw`font-bold` : null}>
                Tired
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedEmotion("anxious")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/emotionDetail/anxious.png")}
              />
              <Text
                style={selectedEmotion === "anxious" ? tw`font-bold` : null}
              >
                Anxious
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
