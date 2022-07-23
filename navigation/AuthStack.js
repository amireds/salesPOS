import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboard from "../screens/auth/Onboarding";
import BaseAuth from "../screens/auth/BaseAuth";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import { TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="baseAuth">
      <Stack.Screen
        name="onboarding"
        component={Onboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="baseAuth"
        component={BaseAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitle: "Log in",
          headerTitleStyle: {
            color: "#1B1D21",
            fontFamily: "medium",
            lineHeight: 30,
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 24 }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="#1B1D21" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthStack;
