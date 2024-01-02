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
      <View style={tw`mx-15 mb-3`}>
        <Chip title="The last 7 days" type="outline" />
      </View>
      <View style={tw`flex-row`}>
        <View style={tw`flex flex-col items-center justify-center mr-4`}>
          <Image
            source={require("../assets/emoji/happy.png")}
            style={tw`mb-1 w-8 h-8`}
          />
          <Image
            source={require("../assets/emoji/normal.png")}
            style={tw`mb-2 w-8 h-8`}
          />
          <Image
            source={require("../assets/emoji/sad.png")}
            style={tw`mb-1 w-8 h-8`}
          />
          <Image
            source={require("../assets/emoji/cry.png")}
            style={tw`mb-2 w-8 h-8`}
          />
          <Image
            source={require("../assets/emoji/angry.png")}
            style={tw`mb-4 w-8 h-8`}
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
