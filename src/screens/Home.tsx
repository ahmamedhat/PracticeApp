import { View } from "react-native";
import React from "react";
import { CustomText } from "@components";

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <CustomText classNames="text-2xl font-bold">Home</CustomText>
    </View>
  );
};

export default Home;
