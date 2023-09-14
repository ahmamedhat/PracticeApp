import { View } from "react-native";
import React from "react";
import { Colors, IconSizes, RouteNames } from "@utils/constants";
import { HomeIcon, ProfileIcon, BellIcon } from "@icons";

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
            fill={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      case RouteNames.NOTIFICATIONS:
        return (
          <BellIcon
            width={IconSizes.BottomBar}
            height={IconSizes.BottomBar}
            fill={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      case RouteNames.PROFILE:
        return (
          <ProfileIcon
            width={IconSizes.BottomBar}
            height={IconSizes.BottomBar}
            fill={isActive ? Colors.PrimaryIcon : Colors.SecondaryIcon}
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon()}</View>;
};

export default BottomBarIcon;
