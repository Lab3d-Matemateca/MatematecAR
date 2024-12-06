import { Link } from "expo-router"
import { ReactNode } from "react"
import { Pressable, Text } from "react-native"

export const Button = ({children, className, color, onPress}: {children: ReactNode, className?: string, color?: string, onPress?: () => void}) => {
    return (
        <Pressable onPress={() => onPress && onPress()} className={`${className} px-[24px] py-[10px] rounded-[16px]`}>
            <Text style={{ color: color || "#FFFFFF" }} className={`font-extrabold text-white text-lg text-center text-[${color}]`}>{children}</Text>
        </Pressable>
    )
}

export const NavButton = ({children, className, href, color}: {children: ReactNode, className?: string, href: string, color?: string}) => {
    return (
        <Link href={href} className={`${className} px-[24px] py-[10px] rounded-[16px]`}>
            <Text className={`font-extrabold text-white text-lg text-center text-[${color}]`}>{children}</Text>
        </Link>
    )
}