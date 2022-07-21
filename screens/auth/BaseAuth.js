import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import AuthStyles from "./authStyles";
import { StatusBar } from "expo-status-bar";
import AppButton from "../../component/AppButton";
import colors from "../../utils/colors";
import Logo from "../../component/Logo";

function BaseAuth({ navigation }) {
  return (
    <SafeAreaView style={AuthStyles.baseAuth.container}>
      <View style={AuthStyles.baseAuth.innerContainer}>
        <Logo />
        <Text style={AuthStyles.baseAuth.title}>Create a Free Account</Text>

        <AppButton
          title="Log in"
          color={colors.primary}
          btnHandler={() => navigation.navigate("login")}
        />
        <AppButton
          title="Register"
          color={colors.secondary}
          btnHandler={() => navigation.navigate("register")}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default BaseAuth;
