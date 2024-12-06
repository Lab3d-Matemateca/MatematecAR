import { Button } from "@/components/button";
import { NumListItem } from "@/components/num-list";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function Index () {
    const navigation = useNavigation();

    const instructions = [
        {
            index: 1,
            content: "Clique em 'Começar' no menu Inicial. Permita que o app acesse a câmera de seu aparelho;"
        },
        {
            index: 2,
            content: "Aponte a sua câmera para o QRCode próximo a cada peça em exposição;"
        },
        {
            index: 3,
            content: "Explore o universo matemático atraveś da união entre os mundos real e virtual!"
        }
    ]

    return (
        <View className="p-[32px] bg-[#7ac142] h-full w-screen flex-1 gap-4">
            <View className="w-full flex flex-col gap-4">
                <Text className="text-white font-bold text-2xl text-center">Como usar o aplicativo?</Text>
                {instructions.map(instruction => (
                    <NumListItem key={instruction.index} index={instruction.index} content={instruction.content} color="#fffff" />
                ))}
                <FontAwesome size={100} name="cube" color="white" />
                <Text className="text-white font-bold">Você pode voltar ao menu Inicial a qualquer momento durante a imersão, basta clicar no ícone localizado no canto superior direito de sua tela.</Text>
            </View>
            <Button className="bg-white w-full" color="#7ac142" onPress={() => navigation.goBack()}>Entendi!</Button>
        </View>
    )
}