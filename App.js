import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useRoute } from "./router";
import { styles } from "./styles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  console.log(Platform.OS);

  const routing = useRoute(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>
      {/* {Platform.OS == "ios" ? <StatusBar barStyle={"dark-content"} :  <StatusBar style="auto" />} */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
