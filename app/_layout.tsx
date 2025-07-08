import { Stack } from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
