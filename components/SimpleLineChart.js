import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import tw from "twrnc";
import { Chip } from "@rneui/themed";

const MoodChart = ({ data }) => {
  const chartConfig = {
    backgroundColor: "#FEFCF5",
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "0",
      strokeWidth: "5",
      stroke: "#FC4C4C",
    },
  };

  return (
    <View>
      {/* <Text style={tw`text-lg font-bold mb-2 text-center`}>Mood Flow</Text> */}
      <View style={tw`mx-15 mb-3`}>
        <Chip title="The last 7 days" type="outline" />
      </View>
      <View style={tw`flex-row`}>
        <View style={tw`flex flex-col items-center justify-center mr-4`}>
          <Image
            source={require("../assets/emotionDetail/excited.png")}
            style={tw`mb-2 w-7 h-7`}
          />
          <Image
            source={require("../assets/emotionDetail/happy.png")}
            style={tw`mb-2 w-7 h-7`}
          />
          <Image
            source={require("../assets/emotionDetail/tired.png")}
            style={tw`mb-2 w-7 h-7`}
          />
          <Image
            source={require("../assets/emotionDetail/sad.png")}
            style={tw`mb-2 w-7 h-7`}
          />
          <Image
            source={require("../assets/emotionDetail/angry.png")}
            style={tw`mb-2 w-7 h-7`}
          />
        </View>
        <LineChart
          data={data}
          width={320}
          height={200}
          chartConfig={chartConfig}
          bezier
          hidePointsAtIndex={[]}
          withHorizontalLabels={false}
          style={tw`pr-0`}
        />
      </View>
    </View>
  );
};

export default MoodChart;
