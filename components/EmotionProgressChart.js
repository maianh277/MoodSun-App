
import React from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import { View,Text,Dimensions } from 'react-native';
import tw from 'twrnc';


const screenWidth = Dimensions.get('window').width;
const colors = ["rgba(212, 246, 233, opct)", "rgba(255, 243, 205, opct)", "rgba(181, 207, 241, opct)", "rgba(155, 194, 245, opct)", "rgba(221, 101, 110, opct)"]
const chartConfig = {
  backgroundGradientFrom: "#FEFCF5",
  backgroundGradientTo:"#FEFCF5",
  color: (opacity = 1, index) => {
    return index != undefined
    ? colors[index].replace("opct", opacity)
    : `rgba(221, 101, 110, ${opacity})`
  }, 
  
  strokeWidth: 0, 
  barPercentage: 0,
  useShadowColorFromDataset: false 
};

const EmotionProgressChart = ({ data }) => {
  return (
    <View>
      <View>
      <Text style={tw`text-lg font-bold mb-2 text-center`}>Mood Progrees</Text>
      </View>
      <ProgressChart
      data={data}
      width={screenWidth * 0.9} 
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      hideLegend={false}
    />
    </View>
    
  );
};

export default EmotionProgressChart;
