import { Text, View } from "react-native"

export const NumList = () => {
    return (
        <View>
            
        </View>
    )
}

export const NumListItem = ({index, content, color}: {index: number, content: string, color?: string}) => {
    return (
        <View className="flex flex-row gap-4 w-full pr-4">
            <Text className={`text-[${color}] text-white text-4xl font-bold`}>{index}</Text>
            <Text className={`text-[${color}] text-white font-bold`}>{content}</Text>
        </View>
    )
}