import { ReactNode } from "react"
import { Pressable, Text } from "react-native"

export const Button = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <Pressable className={`px-[24px] py-[10px] rounded-[16px] ${className}`}>
            <Text className="font-extrabold text-white text-lg text-center">{children}</Text>
        </Pressable>
    )
}