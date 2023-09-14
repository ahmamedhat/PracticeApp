import { View } from "react-native";
import React, { useState } from "react";
import { ButtonWithLoading, CustomText, CustomTextInput } from "@components";
import { setUser } from "@redux/userSlice";
import { useAppDispatch } from "@redux/hooks";
import { LockIcon, ProfileIcon, RightArrowIcon } from "@icons";
import { Colors, IconSizes } from "@utils/constants";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setUser({ name: username }));
      setLoading(false);
    }, 3000);
  };

  return (
    <View className="flex-1 bg-primaryButton">
      <View className="mt-[28vh] flex-1 bg-[#121212] p-4 rounded-t-[50px] pt-[8vh]">
        <CustomText classNames="text-4xl self-center text-white tracking-[6px] mb-14 font-semibold">
          LOGIN
        </CustomText>

        <CustomTextInput
          value={username}
          onTextChange={val => setUserName(val)}
          capitalize={false}
          secureTextEntry={false}
          placeholder="Username">
          <ProfileIcon
            width={IconSizes.Button}
            height={IconSizes.Button}
            fill={Colors.PrimaryButton}
          />
        </CustomTextInput>
        <CustomTextInput
          value={password}
          onTextChange={val => setPassword(val)}
          capitalize={false}
          secureTextEntry={true}
          placeholder="Password">
          <LockIcon
            width={IconSizes.Button}
            height={IconSizes.Button}
            fill={Colors.PrimaryButton}
          />
        </CustomTextInput>

        <ButtonWithLoading title="LOGIN" onPress={onLogin} isLoading={loading}>
          <RightArrowIcon
            width={IconSizes.Button}
            height={IconSizes.Button}
            fill={Colors.ButtonIcon}
          />
        </ButtonWithLoading>

        <View className="flex flex-row m-auto">
          <CustomText>Don&apos;t have an account yet?</CustomText>
          <CustomText classNames="ml-1 underline" onPress={() => null}>
            Signup
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
