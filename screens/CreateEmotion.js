import { ScrollView, View, Text, Dimensions, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import EmotionPick from "../components/EmotionPick";
import EmotionDetailPick from "../components/EmotionDetailPick";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Acquaintance from "../components/Acquaintance";
import EmotionInput from "../components/EmotionInput";
import UploadMemories from "../components/UploadMemories";
import CustomButton from "../components/CustomButton";
import DatePicker from "react-native-modern-datepicker";
const { height, width } = Dimensions.get("window");
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { getAuth } from "firebase/auth";
// import ImagePicker from "react-native-image-crop-picker";
export default function CreateEmotion({ navigation, route }) {
  const { isModal } = route.params || {};
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [emotionGeneral, setEmotionGeneral] = useState("");
  const [emotionDetail, setEmotionDetail] = useState("");
  const [acquaintance, setAcquaintance] = useState("");
  const [content, setContent] = useState("");
  const [account, setAccount] = useState("");
  const closeModal = () => {
    navigation.navigate("CreateEmotion", { isModal: false });
  };

  // chon emotion general
  const handleSelectedEmotion = (emotion) => {
    setEmotionGeneral(emotion);
  };
  // chon emotion detail
  const handleSelectedEmotionDetail = (emotion) => {
    setEmotionDetail(emotion);
  };
  const handleSelectedAcquaintance = (acquaintance) => {
    setAcquaintance(acquaintance);
  };
  // lấy user email để lưu khi tạo task
  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      setAccount(user.email);
    }
  }, []);
  const onDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const createEmotion = async () => {
    const formattedDate = selectedDate.toLocaleString();
    await addDoc(collection(db, "emotion"), {
      emotionGeneral: {
        name: emotionGeneral,
        // path: `../assets/emoji/${emotionGeneral}.png`,
      },
      emotionDetail: {
        name: emotionDetail,
        // path: `../assets/emoji/${emotionDetail}.png`,
      },
      acquaintance: {
        name: acquaintance,
        // path: `../assets/emoji/${acquaintance}.png`,
      },
      content: content,
      date: formattedDate,
      // time: formattedTime,
      account: account,
    })
      .then(() => {
        console.log(formattedDate);
        console.log("Add data successful");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const selectImageFromGallery = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then((image) => {
  //     console.log(image);
  //   });
  // };
  return (
    <Modal visible={isModal} animationType="slide" transparent={true}>
      <ScrollView style={{ height, width, backgroundColor: "#F4EDE3" }}>
        <View>
          <View style={tw`flex-row items-center justify-between mt-5 mx-7 `}>
            <Text
              style={tw`text-lg font-bold`}
              onPress={() => setShowDatePicker(true)}
            >
              Date {selectedDate ? selectedDate : new Date().toLocaleString()}
            </Text>
            <Ionicons
              name="close-outline"
              size={24}
              style={tw`ml-[20px]`}
              onPress={closeModal}
            />
          </View>
          {showDatePicker && (
            <DatePicker
              mode="calendar"
              onSelectedChange={onDateChange}
              initial={selectedDate}
            />
          )}
          <EmotionPick
            bgColor="#FEFDFB"
            onEmotionSelected={handleSelectedEmotion}
          />
          <EmotionDetailPick
            bgColor="#FEFDFB"
            onEmotionDetailSelected={handleSelectedEmotionDetail}
          />
          <Acquaintance
            bgColor="#FEFDFB"
            onAcquaintanceSelected={handleSelectedAcquaintance}
          />
          <EmotionInput
            bgColor="#FEFDFB"
            value={content}
            onChangeText={(content) => {
              setContent(content);
            }}
          />
          <UploadMemories
            bgColor="#FEFDFB"
            // selectImageFromGallery={selectImageFromGallery}
          />
          <View style={tw`mx-5`}>
            <CustomButton buttonText="Done" onLoginPress={createEmotion} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
