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
      fontSize: 18,
      lineHeight: 24,
      fontFamily: "semiBold",
      color: colors.white,
    },
  },
  form: {
    input: {
      inputContainer: {
        width: "100%",
        alignItems: "flex-start",
        position: "relative",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.border,
      },
      inputText: {
        width: "100%",
        height: 56,
        paddingHorizontal: 26,
        fontFamily: "regular",
        fontSize: 16,
        lineHeight: 24,
        color: colors.textTwo,
      },
      label: {
        fontSize: 16,
        lineHeight: 21,
        fontFamily: "regular",
        backgroundColor: colors.white,
        color: colors.deep,
        paddingHorizontal: 10,
        marginLeft: 16,
        position: "absolute",
        textTransform: "capitalize",
      },
    },
    errorText: {
      fontSize: 12,
      marginTop: 5,
      fontFamily: "regular",
      marginLeft: 8,
      color: colors.accent,
    },
    forgotPassword: {
      container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
      },
      text: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: "regular",
        color: colors.textTwo,
      },
    },
  },
});

export default GlobalStyles;
