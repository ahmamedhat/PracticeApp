import { View } from "react-native";
import React from "react";
import { CustomText } from "@components";
import { useAppSelector } from "@redux/hooks";

const Home = () => {
  const user = useAppSelector(state => state.user.user);

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View className="flex-col w-screen h-[10vh] p-2">
        <CustomText classNames="text-xl font-bold">
          Good Morning {user?.name} 👋🏻
        </CustomText>
        <CustomText classNames="text-md font-semibold">Online</CustomText>
      </View>
      <View className="w-screen bg-white h-[0.6px] m-2" />

      <CustomText classNames="text-2xl font-bold">Home</CustomText>
    </View>
  );
};

export default Home;
