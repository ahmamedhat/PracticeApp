import { View } from "react-native";
import React from "react";
import { Colors, IconSizes, RouteNames } from "@utils/constants";
import HomeIcon from "@icons/home.svg";
import ProfileIcon from "@icons/profile.svg";
import NotificaitonsIcon from "@icons/bell.svg";

interface IProps {
  routeName: string;
  isActive: boolean;
}

const BottomBarIcon = ({ routeName, isActive }: IProps) => {
  const renderIcon = () => {
    switch (routeName) {
      case RouteNames.HOME:
        return (
          <HomeIcon
            width={IconSizes.BottomBar}
            height={IconSizes.BottomBar}
            fill={isActive ? Colors.IconActive : Colors.IconInActive}
          />
        );
      case RouteNames.NOTIFICATIONS:
        return (
          <NotificaitonsIcon
            width={IconSizes.BottomBar}
            height={IconSizes.BottomBar}
            fill={isActive ? Colors.IconActive : Colors.IconInActive}
          />
        );
      case RouteNames.PROFILE:
        return (
          <ProfileIcon
            width={IconSizes.BottomBar}
            height={IconSizes.BottomBar}
            fill={isActive ? Colors.IconActive : Colors.IconInActive}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon()}</View>;
};

export default BottomBarIcon;
