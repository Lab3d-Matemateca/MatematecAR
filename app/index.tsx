import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Section, SectionTitle } from "@/components/section";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

const imeLogo = require("@/assets/images/ime-logo.png")

export default function Index() {
  return (
    <View
      className="flex flex-col w-screen bg-[#f5f4f8] h-screen p-4 gap-8"
    >
      <View className="flex flex-row justify-between w-full items-center">
        <FontAwesome size={48} name="circle" color="black" />
        <View className="flex flex-col justify-center items-center">
          <Text className="text-3xl text-[#404040]">matema<Text className="font-extrabold">tecAR</Text></Text>
          <Text className="text-xs">EXPLORE, APRENDA, DIVIRTA-SE!</Text>
        </View>
        <Image style={{width: 50, height: 50}} source={imeLogo} />
      </View>
      <Card>
        <View className="flex-1 flex flex-col items-center justify-center gap-4">
              <View className="flex flex-col items-center">
                  <Text className="text-[100px] font-extrabold text-white leading-none">AR</Text>
                  <Text className="text-[10px] font-extrabold text-white leading-none">REALIDADE AUMENTADA</Text>
              </View>
              <Button className="bg-[#6ca8cd]">Começar</Button>
          </View>
          <View className="flex-1 flex items-center justify-center">
              <FontAwesome size={100} name="cube" color="white" />
          </View>
      </Card>
      <Section>
        <SectionTitle>Precisa de ajuda?</SectionTitle>
        <Button className="w-full bg-[#7ac142]">Como usar o aplicativo?</Button>
      </Section>

    </View>
  );
}
