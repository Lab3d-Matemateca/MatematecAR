import { FontAwesome } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

export const Card = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <View className={`${className} p-[24px] rounded-[20px] flex flex-row justify-between items-center`}>
            {children}
        </View>
    );
};
