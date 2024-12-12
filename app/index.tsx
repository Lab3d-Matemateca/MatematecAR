import { ExternalLink } from "@/app-example/components/ExternalLink";
import { Button, NavButton } from "@/components/button";
import { Card } from "@/components/card";
import { Section, SectionTitle } from "@/components/section";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
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
      <Card className="bg-[#0079c2] py-[48px]">
        <View className="flex-1 flex flex-col items-center justify-center gap-4">
              <View className="flex flex-col items-center">
                  <Text className="text-[100px] font-extrabold text-white leading-none">AR</Text>
                  <Text className="text-[10px] font-extrabold text-white leading-none">REALIDADE AUMENTADA</Text>
              </View>
              <NavButton href="/ar" className="bg-[#6ca8cd]">Começar</NavButton>
          </View>
          <View className="flex-1 flex items-center justify-center">
              <FontAwesome size={100} name="cube" color="white" />
          </View>
      </Card>
      <Section>
        <SectionTitle>Precisa de ajuda?</SectionTitle>
        <NavButton href="/tutorial" className="w-full bg-[#7ac142]">Como usar o aplicativo?</NavButton>
      </Section>
      <Section>
        <SectionTitle>Conheça os nossos sites!</SectionTitle>
        <View className="flex flex-row gap-4">
          <ExternalLink href="https://matemateca.ime.usp.br/">
            <Card className="bg-[#eaaa08] w-fit flex flex-col gap-4">
              <FontAwesome size={100} name="cube" color="white" />
              <Text className="text-[16px] font-extrabold text-white leading-none">Matemateca</Text>
            </Card>
          </ExternalLink>
          <ExternalLink href="https://docs.google.com/document/d/1OuxJp8augSKuZ6rLnI4MrBjUvQvX9GsL_PDsuVp_O3o/edit?tab=t.0">
            <Card className="bg-[#f47920] w-fit flex flex-col gap-4">
              <FontAwesome size={100} name="cube" color="white" />
              <Text className="text-[16px] font-extrabold text-white leading-none">PUB 2024</Text>
            </Card>
          </ExternalLink>
        </View>
      </Section>
    </View>
  );
}
