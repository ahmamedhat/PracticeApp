import { View } from "react-native";
import React from "react";
import { Button, CustomText } from "@components";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-col w-screen h-[10vh] p-2">
        <CustomText classNames="text-xl font-bold">
          Good Morning Ahmad 👋🏻
        </CustomText>
        <CustomText classNames="text-md font-semibold">Online</CustomText>
      </View>
      <View className="w-screen bg-white h-[0.6px] m-2" />
      <Button title="Login" classNames="font-bold" onPress={() => 1 + 1} />
    </SafeAreaView>
  );
};

export default LoginScreen;
