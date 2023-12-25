import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/FirebaseConfig";

export default function UploadMemories({
  bgColor,
  uploadImageAsync,
  image,
  setImage,
}) {
  const pickImage = async () => {
    if (!image) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      delete result.cancelled;

      if (!result.canceled) {
        const uploadURL = await uploadImageAsync(result.assets[0].uri);
        setImage(uploadURL);
      }
    }
  };

  const deleteImage = async () => {
    const deleteRef = ref(storage, image);
    try {
      await deleteObject(deleteRef);
      setImage(null);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <View
        style={[tw`my-3 mx-5 py-3 rounded-lg`, { backgroundColor: bgColor }]}
      >
        <Text style={tw`text-center font-bold text-lg`}>Upload Memories</Text>
        <View style={tw`flex-col items-center my-15`}>
          {image && image ? (
            <View>
              <Image
                source={{ uri: image }}
                style={{ width: 300, height: 300 }}
              />
              <TouchableOpacity
                style={tw`bg-[#ffbc5d] mt-3 p-3 rounded-lg mx-20`}
                onPress={deleteImage}
              >
                <Text style={tw`text-white text-center font-bold`}>
                  Delete image
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={tw`items-center`} onPress={pickImage}>
              <Image
                style={tw`h-10 w-10 my-1`}
                source={require("../assets/upload_memories.png")}
              />
              <Text>Click here to select photo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
