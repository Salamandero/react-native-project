import React from "react";
import { useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { styles } from "./styles";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  console.log(Platform.OS);
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
    <>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={{
            ...styles.image,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          source={require("./assets/bg.jpg")}
        ></ImageBackground>
        {true ? <RegistrationScreen /> : <LoginScreen />}
        <StatusBar style="auto" />
        {/* <StatusBar barStyle={"dark-content"} /> */}
      </SafeAreaView>
    </>
  );
}
