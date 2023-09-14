import { Dimensions } from "react-native";

export const RouteNames = {
  HOME: "Home",
  PROFILE: "Profile",
  NOTIFICATIONS: "Notifications",
};

export enum IconSizes {
  BottomBar = 30,
}

export const Colors = {
  Main: "#0A0E21",
  Secondary: "#3498DB",
  IconActive: "#3498DB",
  IconInActive: "#CCCCCC",
};

export enum DeviceScreen {
  Height = Dimensions.get("window").height,
  Width = Dimensions.get("window").width,
}
