import '@/global.css'

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    statusBarBackgroundColor: "#f5f4f8",
    statusBarStyle: "dark"
  }} />;
}
