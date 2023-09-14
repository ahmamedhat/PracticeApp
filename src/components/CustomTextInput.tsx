import { View, TextInput } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@utils/constants";

interface IProps {
  children: ReactNode;
  secureTextEntry?: boolean;
  capitalize?: boolean;
  onTextChange: (val: string) => void;
  value: string;
  placeholder: string;
}

const CustomTextInput = ({
  children,
  secureTextEntry,
  capitalize,
  onTextChange,
  value,
  placeholder,
}: IProps) => {
  return (
    <View className="">
      <View className="absolute z-10 left-6 bottom-[55%]">{children}</View>
      <TextInput
        selectionColor={Colors.PrimaryButton}
        secureTextEntry={secureTextEntry}
        autoCapitalize={capitalize ? "none" : "sentences"}
        onChangeText={onTextChange}
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.SecondaryText}
        className="h-[7vh] bg-white rounded-full pb-1 pl-16 w-full mb-6 font-poppins"
        style={{
          color: Colors.PrimaryButton,
        }}
      />
    </View>
  );
};

export default CustomTextInput;
