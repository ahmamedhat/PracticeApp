import { Text, TextProps } from "react-native";
import React, { ReactNode } from "react";
import clsx from "clsx";

interface CustomTextProps extends TextProps {
  children: ReactNode;
}

const CustomText = (props: CustomTextProps) => {
  return (
    <Text {...props} className={clsx("font-poppins text-white")}>
      {props.children}
    </Text>
  );
};

export default CustomText;
