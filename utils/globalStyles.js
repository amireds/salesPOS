import { StyleSheet } from "react-native";
import colors from "./colors";

const GlobalStyles = StyleSheet.create({
  btn: {
    btnContainer: {
      height: 56,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      width: "100%",
      marginVertical: 15,
    },
    btnText: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "semiBold",
      color: colors.white,
    },
  },
});

export default GlobalStyles;
