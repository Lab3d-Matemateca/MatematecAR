import { Text, View } from "react-native";
import { ViroARScene, ViroScene, ViroText } from "@reactvision/react-viro"

export default function Index () {
    return (
            <ViroARScene>
                <ViroText text="Hello World" position={[0, -.1, -1]} />
            </ViroARScene>
    )
}