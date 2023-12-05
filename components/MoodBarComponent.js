import React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';


const moodsData = [
  { mood: 'Happy', count: 10, color: 'bg-yellow-400', icon: require('../assets/emotionDetail/excited.png') },
  { mood: 'Sad', count: 5, color: 'bg-blue-400', icon: require('../assets/emotionDetail/happy.png') },
  { mood: 'Angry', count: 3, color: 'bg-red-400', icon: require('../assets/emotionDetail/tired.png') },
  { mood: 'Neutral', count: 15, color: 'bg-gray-400', icon: require('../assets/emotionDetail/sad.png') }, 
  { mood: 'Tired', count: 7, color: 'bg-orange-400', icon: require('../assets/emotionDetail/angry.png') },
];

const MoodBarComponent = () => {
  const total = moodsData.reduce((sum, { count }) => sum + count, 0);

  return (
    <View style={tw`items-center bg-[#fefcf5] mt-5 mb-5`}>
      <Text style={tw`text-lg font-bold mb-2`}>Mood Bar</Text>
      <View style={tw`w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-2`}>
        {moodsData.map(({ mood, count, color }) => {
          const width = (count / total) * 100;
          return (
            <View
              key={mood}
              style={tw.style(`h-full ${color}`, { width: `${width}%` })}
            />
          );
        })}
      </View>
      <View style={tw`flex-row justify-between w-full`}>
        {moodsData.map(({ mood, icon }) => (
          <Image
            key={mood}
            source={icon}
            style={tw`w-8 h-8`} 
            resizeMode="contain"
          />
        ))}
      </View>
    </View>
  );
};

export default MoodBarComponent;
