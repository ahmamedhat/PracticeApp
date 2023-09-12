import { View } from "react-native";
import React from "react";
import { Button, CustomText } from "@components";
import { useAppDispatch } from "@redux/hooks";
import { deleteUser } from "@redux/userSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <View className="flex-1 justify-center items-center">
      <CustomText classNames="text-2xl font-bold text-black">
        Profile
      </CustomText>
      <Button
        title="Logout"
        classNames="text-2xl font-bold"
        onPress={() => dispatch(deleteUser())}
      />
    </View>
  );
};

export default Profile;
