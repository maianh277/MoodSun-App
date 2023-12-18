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

export default function CreateEmotion({ navigation, route, fetchEmotion }) {
  const { isModal } = route.params || {};
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [emotionGeneral, setEmotionGeneral] = useState("");
  const [emotionDetail, setEmotionDetail] = useState("");
  const [acquaintance, setAcquaintance] = useState("");
  const [content, setContent] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
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
    await addDoc(collection(db, "emotion"), {
      emotionGeneral: {
        name: emotionGeneral,
        path: `../assets/emoji/${emotionGeneral}.png`,
      },
      emotionDetail: {
        name: emotionDetail,
        path: `../assets/emoji/${emotionDetail}.png`,
      },
      acquaintance: {
        name: acquaintance,
        path: `../assets/emoji/${acquaintance}.png`,
      },
      content: content,
      date: selectedDate,
      account: account,
    })
      .then(() => {
        console.log("Add data successful");
        fetchEmotion();
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal visible={isModal} animationType="slide" transparent={true}>
      <ScrollView style={{ height, width, backgroundColor: "#F4EDE3" }}>
        <View>
          <View style={tw`flex-row items-center justify-between mt-5 mx-7 `}>
            <Text
              style={tw`text-lg font-bold`}
              onPress={() => setShowDatePicker(true)}
            >
              Date{" "}
              {selectedDate
                ? selectedDate.toLocaleString()
                : currentDate.toLocaleString()}
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
          <UploadMemories bgColor="#FEFDFB" />
          <View style={tw`mx-5`}>
            <CustomButton buttonText="Done" onLoginPress={createEmotion} />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
