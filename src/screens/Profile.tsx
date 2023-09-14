import { View } from "react-native";
import React, { useState } from "react";
import { ButtonWithLoading } from "@components";
import { useAppDispatch } from "@redux/hooks";
import { deleteUser } from "@redux/userSlice";
import { Logout } from "@icons";
import { Colors, IconSizes } from "@utils/constants";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const onLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteUser());
      setLoading(false);
    }, 2000);
  };
  return (
    <View className="flex-1 justify-center p-4 bg-primaryBackground">
      <ButtonWithLoading
        title="Logout"
        buttonClassNames="bg-primaryButton px-6"
        textClassNames=""
        onPress={onLogout}
        isLoading={loading}>
        <Logout
          width={IconSizes.Button}
          height={IconSizes.Button}
          fill={Colors.ButtonIcon}
        />
      </ButtonWithLoading>
    </View>
  );
};

export default Profile;
