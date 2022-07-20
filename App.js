import { useCallback, useEffect, useState } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import { connectToDevTools } from "react-devtools-core";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_200ExtraLight,
  Poppins_500Medium,
  Poppins_100Thin,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(["SplashScreen.show"]);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          thin: Poppins_100Thin,
          extraLight: Poppins_200ExtraLight,
          light: Poppins_300Light,
          regular: Poppins_400Regular,
          medium: Poppins_500Medium,
          semiBold: Poppins_600SemiBold,
          bold: Poppins_700Bold,
          extraBold: Poppins_800ExtraBold,
          black: Poppins_900Black,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        //await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
