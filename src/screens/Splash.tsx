import { View } from "react-native";
import React from "react";
import { CustomText } from "@components";

const Splash = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primaryBackground">
      <CustomText classNames="text-2xl">Hello</CustomText>
    </View>
  );
};

export default Splash;
