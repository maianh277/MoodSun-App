import React from "react";
import { View, Dimensions, Image, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import tw from "twrnc";

// const screenWidth = Dimensions.get("window").width;

const MoodChart = ({ data }) => {
  return (
    <View>
      <Text style={tw`text-lg font-bold mb-2 text-center`}>Mood Flow</Text>
      <View style={tw`flex-row`}>
        <View style={tw`flex flex-col items-center justify-center mr-2`}>
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
          width={350}
          height={200}
          chartConfig={chartConfig}
          bezier
          hidePointsAtIndex={[]} // Thêm chỉ số của các điểm bạn muốn ẩn
          withHorizontalLabels={false} // Cái này sẽ ẩn các nhãn dọc
        />
      </View>
    </View>
  );
};

// Cung cấp dữ liệu thực tế và cấu hình biểu đồ của bạn
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};

export default MoodChart;
