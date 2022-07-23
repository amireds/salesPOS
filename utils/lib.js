import { Dimensions, Platform } from "react-native";

export const IOS = Platform.OS === "ios";
export const ANDROID = Platform.OS === "android";
export const WEB = Platform.OS === "web";
export const WIDTH = Math.round(Dimensions.get("window").width);
export const HEIGHT = Math.round(Dimensions.get("window").height);
