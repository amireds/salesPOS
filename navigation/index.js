import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useFlipper } from "@react-navigation/devtools";
import AuthStack from "./AuthStack";

function Index() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
}

export default Index;
