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
      className={clsx(
        "bg-white rounded-2xl items-center justify-center h-[5vh]",
      )}
      onPress={onPress}>
      <CustomText classNames={clsx("text-2xl text-black", classNames)}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
