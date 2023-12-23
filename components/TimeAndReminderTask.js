import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import tw from "twrnc";

export default function TimeAndReminderTask() {
  const [repeatValue, setRepeatValue] = useState("");

  return (
    <View>
      <View>
        <View style={tw`flex-row items-center justify-between mx-7 mt-5 mb-3`}>
          <View style={tw`flex-row items-center gap-4`}>
            <Image
              source={require("../assets/createTaskIcon/repeat.png")}
              style={tw`h-8 w-8`}
            />
            <Text style={tw`text-base`}>Repeat</Text>
          </View>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            value={repeatValue}
            onValueChange={(value) => setRepeatValue(value)}
            items={[
              { label: "None", value: "None" },
              { label: "Weekly", value: "Weekly" },
              { label: "Monthly", value: "Monthly" },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
