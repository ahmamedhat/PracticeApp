import { View } from "react-native";
import React from "react";
import { CustomText } from "@components";
import { useAppSelector } from "@redux/hooks";

const Home = () => {
  const user = useAppSelector(state => state.user.user);

  return (
    <View className="flex-1 justify-center items-center bg-primaryBackground">
      <View className="flex-col w-screen h-[10vh] p-2 justify-center items-center">
        <CustomText className="text-xl font-bold">
          Good Morning {user?.name} 👋🏻
        </CustomText>
        <CustomText className="text-md font-semibold">Online</CustomText>
      </View>
    </View>
  );
};

export default Home;
