import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import tw from 'twrnc';

// Dữ liệu giả định cho Activities
const data = [
  { key: 'Play Soccer', value: 100 },
  // Thêm các mục khác vào đây 
];

const Item = ({ title, value }) => (
  <View style={tw`flex-row items-center mb-2`}>
    <Image
      source={require('../assets/emoji/avatar.png')} 
      style={tw`w-6 h-6 rounded-full mr-3 `}
      resizeMode="cover"
    />
    <Text style={tw`flex-1 text-base`}>{title}</Text>
    <Text style={tw`text-base text-gray-500`}>{value}</Text>
  </View>
);

const ActivitiesComponent = () => {
  return (
    <View style={tw`bg-[#fefcf5] p-5 rounded-lg rounded-5 mt-5`}>
      <Text style={tw`text-lg text-center font-bold mb-3`}>Activities</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.key} value={item.value} />}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default ActivitiesComponent;
