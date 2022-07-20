import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import AuthStyles from "./authStyles";
import { StatusBar } from "expo-status-bar";
import AppButton from "../../component/AppButton";
import colors from "../../utils/colors";

function BaseAuth({ navigation }) {
  return (
    <SafeAreaView style={AuthStyles.baseAuth.container}>
      <View style={AuthStyles.baseAuth.innerContainer}>
        <View style={AuthStyles.baseAuth.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={AuthStyles.baseAuth.logo}
          />
        </View>
        <Text style={AuthStyles.baseAuth.title}>Create a Free Account</Text>

        <AppButton title="Log in" color={colors.primary} />
        <AppButton title="Register" color={colors.secondary} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default BaseAuth;
