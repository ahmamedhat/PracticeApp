import { View } from "react-native";
import React from "react";
import { Button } from "@components";
import { useAppDispatch } from "@redux/hooks";
import { deleteUser } from "@redux/userSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <View className="flex-1 justify-center items-center bg-main">
      <Button
        title="Logout"
        buttonClassNames="bg-secondary px-6"
        textClassNames="text-sm font-semibold"
        onPress={() => dispatch(deleteUser())}
      />
    </View>
  );
};

export default Profile;
