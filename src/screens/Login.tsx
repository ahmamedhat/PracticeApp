import { View } from "react-native";
import React, { useState } from "react";
import {
  ButtonWithLoading,
  CustomText,
  CustomTextInput,
  Modal,
} from "@components";
import { setUser } from "@redux/userSlice";
import { useAppDispatch } from "@redux/hooks";
import { LockIcon, ProfileIcon, RightArrowIcon } from "@icons";
import { Colors, DeviceScreen, IconSizes } from "@utils/constants";
import { InferType, object, string } from "yup";
import { Formik, FormikErrors } from "formik";
import { Logo } from "@images";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  const userSchema = object({
    username: string()
      .required("Username is required")
      .min(4, "Username should not be less than 4 characters"),
    password: string()
      .required("Password is required")
      .min(4, "Password should not be less than 4 characters"),
  });

  type UserSchema = InferType<typeof userSchema>;

  const onLogin = (
    user: UserSchema,
    errors?: FormikErrors<UserSchema>,
    touched?: any,
  ) => {
    if (
      !touched.username ||
      (!touched.password &&
        (user.username.length < 1 || user.password.length < 1))
    ) {
      setErrorText("All fields are required");
      setIsModalVisible(true);
      return;
    } else if (errors?.username || errors?.password) {
      setErrorText(errors?.username ?? (errors?.password as string));
      setIsModalVisible(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch(setUser({ name: user.username }));
      setLoading(false);
    }, 3000);
  };

  return (
    <View className="flex-1 bg-accentBackground">
      <View className="absolute self-center">
        <Logo
          width={DeviceScreen.Width / 2.4}
          height={DeviceScreen.Height / 2.4}
          fill={Colors.PrimaryText}
        />
      </View>
      <View className="mt-[34vh] flex-1 bg-primaryBackground p-4 rounded-t-[50px] pt-[6vh]">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={values => onLogin(values)}
          validationSchema={userSchema}>
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <View>
              <CustomTextInput
                value={values.username}
                onTextChange={handleChange("username")}
                onBlur={handleBlur("username")}
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
                value={values.password}
                onTextChange={handleChange("password")}
                capitalize={false}
                secureTextEntry={true}
                onBlur={handleBlur("password")}
                placeholder="Password">
                <LockIcon
                  width={IconSizes.Button}
                  height={IconSizes.Button}
                  fill={Colors.PrimaryButton}
                />
              </CustomTextInput>
              <ButtonWithLoading
                title="LOGIN"
                onPress={() => {
                  onLogin(values, errors, touched);
                }}
                isLoading={loading}>
                <RightArrowIcon
                  width={IconSizes.Button}
                  height={IconSizes.Button}
                  fill={Colors.ButtonIcon}
                />
              </ButtonWithLoading>
            </View>
          )}
        </Formik>

        <View className="flex flex-row m-auto">
          <CustomText>Don&apos;t have an account yet?</CustomText>
          <CustomText classNames="ml-1 underline" onPress={() => null}>
            Signup
          </CustomText>
        </View>
      </View>
      <Modal
        text={errorText}
        isVisible={isModalVisible}
        onCloseModal={() => setIsModalVisible(false)}
        withOptions={false}
      />
    </View>
  );
};

export default LoginScreen;
