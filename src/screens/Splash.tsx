import { View } from "react-native";
import React from "react";
import { Logo } from "@images";
import { Colors, DeviceScreen } from "@utils/constants";

const Splash = () => {
  return (
    <View className="flex-1 justify-center items-center bg-primaryBackground">
      <Logo
        width={DeviceScreen.Width / 2}
        height={DeviceScreen.Height / 2}
        fill={Colors.AccentBackground}
        className="self-center"
      />
    </View>
  );
};

export default Splash;
