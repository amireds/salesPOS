import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboard from "../screens/auth/Onboarding";
import BaseAuth from "../screens/auth/BaseAuth";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen
        name="onboarding"
        component={Onboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="baseAuth" component={BaseAuth} />
    </Stack.Navigator>
  );
}

export default AuthStack;
