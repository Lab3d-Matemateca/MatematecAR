import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const imeLogo = require("@/assets/images/ime-logo.png")

export default function Index() {
  return (
    <View
      className="flex flex-row justify-between w-screen p-4 bg-[#f5f4f8] h-full"
    >
      <FontAwesome size={48} name="circle" color="black" />
      <View className="flex flex-col">
        <Text>matematecAR</Text>
        <Text>EXPLORE, APRENDA, DIVIRTA-SE!</Text>
      </View>
      <Image style={{width: 50, height: 50}} source={imeLogo} />
    </View>
  );
}
