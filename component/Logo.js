import { Image, View } from "react-native";
import AuthStyles from "../screens/auth/authStyles";
import React from "react";

function Logo() {
  return (
    <View style={AuthStyles.baseAuth.logoContainer}>
      <Image
        source={require("../assets/logo.png")}
        style={AuthStyles.baseAuth.logo}
      />
    </View>
  );
}

export default Logo;
