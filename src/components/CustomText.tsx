import { Text } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";

interface IProps {
  children: ReactNode;
  classNames?: string;
}

const CustomText = ({ children, classNames }: IProps) => {
  return (
    <Text className={clsx("font-poppins text-white", classNames)}>
      {children}
    </Text>
  );
};

export default CustomText;
