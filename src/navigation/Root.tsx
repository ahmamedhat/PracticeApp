import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomBarNavigation } from "@navigation";
import { LoginScreen } from "@screens";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={LoginScreen} />
      <Stack.Screen name="App" component={BottomBarNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
