import { TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import clsx from "clsx";

interface IProps {
  title: string;
  onPress: () => void;
  buttonClassNames?: string;
  textClassNames?: string;
}

const Button = ({
  title,
  onPress,
  buttonClassNames,
  textClassNames,
}: IProps) => {
  return (
    <TouchableOpacity
      className={clsx(
        "bg-secondary rounded-3xl items-center justify-center p-3",
        buttonClassNames,
      )}
      onPress={onPress}>
      <CustomText classNames={clsx("text-lg text-white", textClassNames)}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
