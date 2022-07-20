import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  onboarding: {
    container: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 96,
      paddingHorizontal: 24,
    },
    imgContainer: {
      overflow: "hidden",
      marginBottom: 80,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    title: {
      fontSize: 24,
      lineHeight: 36,
      fontFamily: "semiBold",
      color: colors.deep,
      marginBottom: 16,
    },
    subtitle: {
      textAlign: "center",
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "regular",
      color: colors.textTwo,
    },
    skipBtnContainer: {
      paddingHorizontal: 24,
    },
    skipBtnText: {
      fontSize: 18,
      lineHeight: 24,
      fontFamily: "regular",
      color: colors.textTwo,
    },
    nextBtnContainer: {
      width: "100%",
      backgroundColor: colors.primary,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: 56,
    },
    nextBtnText: {
      color: colors.white,
      fontSize: 20,
      lineHeight: 30,
      fontFamily: "medium",
    },
  },
  baseAuth: {
    title: {
      fontFamily: "medium",
    },
  },
});
export default AuthStyles;
