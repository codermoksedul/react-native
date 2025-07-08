import React from "react";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="w-full h-screen flex flex-col items-center justify-center bg-blue-100">
      <Text className="text-4xl">Welcome</Text>
      <Text className=" text-gray-600 mt-2">
        This is a simple React Native app using Expo Router.
      </Text>
      <Text className="text-3xl font-medium px-4 py-2 rounded-md border border-slate-300 bg-white">
        Click Here
      </Text>
    </View>
  );
}
