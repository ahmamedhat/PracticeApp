import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import CustomText from "./CustomText";
import clsx from "clsx";
import { Colors, IconSizes } from "@utils/constants";

interface IProps {
  children: ReactNode;
  title: string;
  onPress: () => void;
  buttonClassNames?: string;
  textClassNames?: string;
  isLoading?: boolean;
}

const ButtonWithLoading = ({
  children,
  title,
  onPress,
  buttonClassNames,
  textClassNames,
  isLoading,
}: IProps) => {
  const ButtonTextAndIcon = () => {
    return (
      <>
        <CustomText
          classNames={clsx(
            "text-lg text-white mr-1 tracking-widest",
            textClassNames,
          )}>
          {title}
        </CustomText>
        <View className="ml-1">{children}</View>
      </>
    );
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      className={clsx(
        "bg-accentBackground flex flex-row rounded-3xl items-center justify-center h-[7vh] shadow-sm shadow-primaryButton",
        buttonClassNames,
      )}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color={Colors.ButtonIcon} size={IconSizes.Button} />
      ) : (
        ButtonTextAndIcon()
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoading;
