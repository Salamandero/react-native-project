import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  console.log("navigation", navigation);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [nameFocusInput, setNameFocusInput] = useState(null);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    if (state.email.length === 0 || state.password.length === 0) {
      return Alert.alert("One of the field clear. Try again!");
    }
    setState(initialState);
    navigation.navigate("Home");
  };
  const keyboardHideWithData = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHideWithData}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            style={styles.imageBg}
            source={require("../../assets/bg.jpg")}
          >
            <View
              style={{
                ...styles.form,
                paddingTop: 32,

                paddingBottom: isShowKeyboard ? 0 : 45,
                marginBottom: isShowKeyboard ? -120 : 0,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Login</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Email"
                  style={{
                    ...styles.input,
                    borderColor:
                      nameFocusInput == "email" ? "#FF6C00" : "#E8E8E8",
                  }}
                  onBlur={() => setNameFocusInput(null)}
                  textContentType="emailAddress"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setNameFocusInput("email");
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  value={state.email}
                  onSubmitEditing={keyboardHideWithData}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: 0,
                    borderColor:
                      nameFocusInput == "password" ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={state.password}
                  placeholder="Password"
                  secureTextEntry={isShowPassword}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setNameFocusInput("password");
                  }}
                  onBlur={() => setNameFocusInput(null)}
                  onSubmitEditing={keyboardHideWithData}
                  autoCorrect={false}
                />
                {state.password.length > 0 && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.visibilityPass}
                    onPress={() => setIsShowPassword(!isShowPassword)}
                  >
                    <Text>{isShowPassword ? "Show" : "Hide"}</Text>
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Log in</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.link}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                <Text style={styles.linkTitle}>
                  Don't have an account? Register
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
