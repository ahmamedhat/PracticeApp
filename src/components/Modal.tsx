import { View } from "react-native";
import React from "react";
import RNModal from "react-native-modal";
import Button from "./Button";
import CustomText from "./CustomText";

interface IProps {
  isVisible: boolean;
  onCloseModal: () => void;
  text: string;
  withOptions: boolean;
  optionAction?: () => void;
  actionText?: string;
}

const Modal = ({
  isVisible,
  text,
  onCloseModal,
  withOptions,
  optionAction,
  actionText,
}: IProps) => {
  return (
    <View className="flex-1 absolute">
      <RNModal
        isVisible={isVisible}
        onBackdropPress={onCloseModal}
        className="">
        <View className="flex flex-col bg-primaryBackground rounded-xl h-[28vh] justify-center items-center overflow-hidden px-6">
          <CustomText classNames="font-bold text-lg self-center text-center mb-8">
            {text}
          </CustomText>
          <View className="flex flex-row absolute bottom-0 right-0 left-0">
            <Button
              title={withOptions ? "Cancel" : "Ok"}
              onPress={onCloseModal}
              buttonClassNames="rounded-none flex-grow"
              textClassNames="font-bold"
            />
            {withOptions && actionText && optionAction && (
              <Button
                title={actionText}
                onPress={optionAction}
                buttonClassNames="rounded-none flex-grow"
                textClassNames="font-bold"
              />
            )}
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;
