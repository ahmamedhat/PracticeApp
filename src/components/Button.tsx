import { TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import clsx from "clsx";

interface IProps {
  title: string;
  onPress: () => void;
  classNames: string;
}

const Button = ({ title, onPress, classNames }: IProps) => {
  return (
    <TouchableOpacity
      className={clsx("bg-white rounded-3xl items-center justify-center p-3")}
      onPress={onPress}>
      <CustomText classNames={clsx("text-lg text-black", classNames)}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
