import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
export default function UploadMemories({ bgColor }) {
  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>Upload Memories</Text>
        <TouchableOpacity
          style={tw`flex-col items-center my-15`}
          // onPress={selectImageFromGallery}
        >
          <Image
            style={tw`h-10 w-10 my-1`}
            source={require("../assets/upload_memories.png")}
          />
          <Text>Click here to select photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
