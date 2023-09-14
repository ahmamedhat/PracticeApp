import { Dimensions } from "react-native";

export const RouteNames = {
  HOME: "Home",
  PROFILE: "Profile",
  NOTIFICATIONS: "Notifications",
};

export enum IconSizes {
  BottomBar = 30,
  Button = 20,
}

export const Colors = {
  PrimaryBackground: "#121212",
  SecondaryBackground: "",
  AccentBackground: "",

  PrimaryButton: "#2D2D2D",
  SuccessButton: "",
  DangerButton: "",
  DisabledButton: "",

  PrimaryText: "white",
  SecondaryText: "#A9A9A9",
  AccentText: "",

  PrimaryIcon: "#2D2D2D",
  SecondaryIcon: "white",

  ButtonIcon: "white",
};

export enum DeviceScreen {
  Height = Dimensions.get("window").height,
  Width = Dimensions.get("window").width,
}
