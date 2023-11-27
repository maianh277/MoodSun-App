import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
export default function Acquaintance({ bgColor }) {
  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-xl `, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>
          Who you were with?
        </Text>
        <View style={tw`flex-row justify-between mx-6 my-3`}>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/acquaintance/friend.png")}
            />
            <Text>Friend</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/acquaintance/family.png")}
            />
            <Text>Family</Text>
          </View>
          <View style={tw`flex-col items-center `}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/acquaintance/partner.png")}
            />
            <Text>Partner</Text>
          </View>
          <View style={tw`flex-col items-center`}>
            <Image
              style={tw`h-10 w-10 my-3`}
              source={require("../assets/acquaintance/none.png")}
            />
            <Text>None</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
