import { FontAwesome } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

export const Card = ({children}: {children: ReactNode}) => {
    return (
        <View className="px-[24px] py-[48px] bg-[#0079c2] w-full rounded-[20px] flex flex-row justify-between items-center">
            {children}
        </View>
    );
};
