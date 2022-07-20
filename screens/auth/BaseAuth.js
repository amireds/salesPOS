import React from "react";
import { Text, View } from "react-native";
import AuthStyles from "./authStyles";

function BaseAuth() {
  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.baseAuth.title}>Base Auth</Text>
    </View>
  );
}

export default BaseAuth;
