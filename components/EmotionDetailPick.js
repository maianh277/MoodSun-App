import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
export default function EmotionDetailPick({ bgColor }) {
  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>Emotions</Text>
        <View style={tw`flex-row justify-between mx-6 my-3`}>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/excited.png")}
            />
            <Text>Excited</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/relax.png")}
            />
            <Text>Relaxed</Text>
          </View>
          <View style={tw`flex-col items-center `}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/proud.png")}
            />
            <Text>Proud</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/hopeful.png")}
            />
            <Text>Hopeful</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between mx-6`}>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/happy.png")}
            />
            <Text>Happy</Text>
          </View>
          <View style={tw`flex-col items-center ml-3`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/sad.png")}
            />
            <Text>Sad</Text>
          </View>
          <View style={tw`flex-col items-center `}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/refreshed.png")}
            />
            <Text>Refreshed</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/gloomy.png")}
            />
            <Text>Gloomy</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-between mx-6 mb-4`}>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/angry.png")}
            />
            <Text>Angry</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/lonely.png")}
            />
            <Text>Lonely</Text>
          </View>
          <View style={tw`flex-col items-center `}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/tired.png")}
            />
            <Text>Tired</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/emotionDetail/anxious.png")}
            />
            <Text>Anxious</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
