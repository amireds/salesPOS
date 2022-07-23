import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import GlobalStyles from "../utils/globalStyles";
import colors from "../utils/colors";

function AppButton({
  title = "Log in",
  btnHandler,
  color,
  style,
  isLoading,
  disabled,
}) {
  return (
    <TouchableOpacity
      activeOpacity={isLoading || disabled ? 1 : 0.5}
      style={[
        GlobalStyles.btn.btnContainer,
        { backgroundColor: color ? color : colors.primary },
        style,
      ]}
      onPress={btnHandler}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} size={18} />
      ) : (
        <Text style={GlobalStyles.btn.btnText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default AppButton;
