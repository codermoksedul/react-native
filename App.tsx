import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./global.css"; // Import NativeWind styles

export default function App() {
  return (
    <View className="w-full flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500">Welcome To App</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
