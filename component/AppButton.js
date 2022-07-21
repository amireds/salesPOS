import React from "react";
import { Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../utils/globalStyles";
import colors from "../utils/colors";

function AppButton({ title = "Log in", btnHandler, color, style }) {
  return (
    <TouchableOpacity
      style={[
        GlobalStyles.btn.btnContainer,
        { backgroundColor: color ? color : colors.primary },
        style,
      ]}
      onPress={btnHandler}
    >
      <Text style={GlobalStyles.btn.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
