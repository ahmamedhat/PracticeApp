import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomBarNavigation } from "@navigation";
import { LoginScreen } from "@screens";
import { useAppSelector } from "@redux/hooks";

const RootNavigation = () => {
  const user = useAppSelector(state => state.user.user);
  const Stack = createNativeStackNavigator();

  const isAuthenticated = () => {
    if (user) {
      return <Stack.Screen name="App" component={BottomBarNavigation} />;
    }
    return <Stack.Screen name="Auth" component={LoginScreen} />;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuthenticated()}
    </Stack.Navigator>
  );
};

export default RootNavigation;
