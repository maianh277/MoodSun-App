import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Modal,
  ToastAndroid,
} from "react-native";
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
import { db, storage } from "../config/FirebaseConfig";
import { getAuth } from "firebase/auth";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export default function CreateEmotion({ navigation, route }) {
  const { isModal } = route.params || {};
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [emotionGeneral, setEmotionGeneral] = useState("");
  const [emotionDetail, setEmotionDetail] = useState("");
  const [acquaintance, setAcquaintance] = useState("");
  const [content, setContent] = useState("");
  const [account, setAccount] = useState("");
  const [image, setImage] = useState(null);

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
  // useEffect(() => {
  //   const user = getAuth().currentUser;
  //   if (user) {
  //     setAccount(user.email);
  //   }
  // }, []);

  const onDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  const formatTime = () => {
    const timeStamp = Date.now();
    const date = new Date(timeStamp);

    const hour = date.getHours();
    const minute = date.getMinutes();

    const formattedTime = hour + ":" + minute.toString().padStart(2, "0");
    console.log(formattedTime);
    return formattedTime;
  };

  const createEmotion = async () => {
    try {
      if (!emotionGeneral || !emotionDetail || !acquaintance) {
        ToastAndroid.show(
          "Please choose all required emotions and acquaintance",
          ToastAndroid.LONG
        );
        return;
      }
      const formattedTime = formatTime();
      const today = new Date().toISOString().split("T")[0].replace(/-/g, "/");
      const formattedDate = selectedDate
        ? selectedDate.toLocaleString()
        : today;
      const isToday = today === formattedDate;
      console.log(today);
      console.log(formattedDate);
      await addDoc(collection(db, "emotion"), {
        emotionGeneral: { name: emotionGeneral },
        emotionDetail: { name: emotionDetail },
        acquaintance: { name: acquaintance },
        content: content,
        date: formattedDate,
        account: getAuth().currentUser.email,
        memories: image,
        time: isToday ? formattedTime : null,
      });

      console.log(formattedDate);
      ToastAndroid.show("Add data successful", ToastAndroid.LONG);
      // console.log("Add data successful");
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `Images/image-${Date.now()}`);
      const result = await uploadBytes(storageRef, blob);

      blob.close();

      return await getDownloadURL(storageRef);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!isModal) {
      setSelectedDate("");
      setEmotionGeneral("");
      setEmotionDetail("");
      setAcquaintance("");
      setContent("");
      setAccount("");
      setImage(null);
    }
  }, [isModal]);
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
                ? selectedDate
                : new Date().toISOString().split("T")[0].replace(/-/g, "/")}
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
              maximumDate={new Date()
                .toISOString()
                .split("T")[0]
                .replace(/-/g, "/")}
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
            uploadImageAsync={uploadImageAsync}
            image={image}
            setImage={setImage}
          />
          <View style={tw`mx-5`}>
            <CustomButton
              buttonText="Done"
              onLoginPress={() => createEmotion()}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
