import { Text, View, StatusBar } from "react-native";
import tw from "twrnc";
export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-400`}>
      <Text>Yo</Text>
      <StatusBar style="auto" />
    </View>
  );
}
