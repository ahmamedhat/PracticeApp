import { View } from "react-native";
import React from "react";
import { Button } from "@components";
import { setUser } from "@redux/userSlice";
import { useAppDispatch } from "@redux/hooks";

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  return (
    <View className="flex-1 bg-black justify-center p-4">
      <Button
        title="Login"
        classNames="font-bold"
        onPress={() => dispatch(setUser({ name: "Ahmad" }))}
      />
      <View className="bg-white h-[0.6px] my-3" />
      <Button
        title="Signup"
        classNames="font-bold"
        onPress={() => setUser({ name: "Ibraheem" })}
      />
    </View>
  );
};

export default LoginScreen;