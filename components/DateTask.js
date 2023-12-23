import { Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import DatePicker from "react-native-modern-datepicker";

export default DateTask = ({ selectedDate, setSelectedDate }) => {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "/");
  // console.log(formattedDate);

  return (
    <SafeAreaView>
      <DatePicker
        mode="calendar"
        disabledDatesTextColor="#ccc"
        minimumDate={formattedDate}
        onSelectedChange={(date) => {
          setSelectedDate(date);
          // console.log(date);
        }}
      />
      <Text style={tw`text-center`}>Date Selected: {selectedDate}</Text>
    </SafeAreaView>
  );
};
