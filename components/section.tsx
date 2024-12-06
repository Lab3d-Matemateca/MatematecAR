import { ReactNode } from "react"
import { Text, View } from "react-native"

export const Section = ({children}: {children: ReactNode}) => {
    return (
        <View className="flex flex-col gap-4">
            {children}
        </View>
    )
}

export const SectionTitle = ({children}: {children: ReactNode}) => {
    return (
        <Text className="font-extrabold text-[#8e8e8e]">{children}</Text>
    )
}