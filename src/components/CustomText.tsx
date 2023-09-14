import { Text } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  classNames?: string;
  onPress?: () => void;
}

const CustomText = ({ children, classNames, onPress }: IProps) => {
  return (
    <Text
      onPress={onPress}
      className={clsx("font-poppins text-white", classNames)}>
      {children}
    </Text>
  );
};

export default CustomText;
