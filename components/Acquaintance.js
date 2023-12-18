import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function Acquaintance({ bgColor, onAcquaintanceSelected }) {
  const [selectedAcquaintance, setSelectedAcquaintance] = useState(null);

  const handleSelectedAcquaintance = (acquaintance) => {
    setSelectedAcquaintance(acquaintance);
    onAcquaintanceSelected(acquaintance);
  };

  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-xl `, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>
          Who you were with?
        </Text>
        <View style={tw`flex-row justify-between mx-6 my-3`}>
          <TouchableOpacity
            onPress={() => handleSelectedAcquaintance("friend")}
          >
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/acquaintance/friend.png")}
              />
              <Text
                style={selectedAcquaintance === "friend" ? tw`font-bold` : null}
              >
                Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectedAcquaintance("family")}
          >
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/acquaintance/family.png")}
              />
              <Text
                style={selectedAcquaintance === "family" ? tw`font-bold` : null}
              >
                Family
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectedAcquaintance("partner")}
          >
            <View style={tw`flex-col items-center `}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/acquaintance/partner.png")}
              />
              <Text
                style={
                  selectedAcquaintance === "partner" ? tw`font-bold` : null
                }
              >
                Partner
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedAcquaintance("none")}>
            <View style={tw`flex-col items-center`}>
              <Image
                style={tw`h-10 w-10 my-3`}
                source={require("../assets/acquaintance/none.png")}
              />
              <Text
                style={selectedAcquaintance === "none" ? tw`font-bold` : null}
              >
                None
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
