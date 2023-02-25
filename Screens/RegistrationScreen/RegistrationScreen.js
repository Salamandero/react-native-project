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
  Image,
  Text,
  StatusBar,
} from "react-native";
import { styles } from "./styles";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [nameFocusInput, setNameFocusInput] = useState(null);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    if (
      state.username.length === 0 ||
      state.email.length === 0 ||
      state.password.length === 0
    ) {
      return Alert.alert("One of the field clear. Try again!");
    }
    setState(initialState);
  };
  const keyboardHideWithData = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const linkToRegistration = () => {
    Alert.alert("Go to login");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHideWithData}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 0 : 45,
              marginBottom: isShowKeyboard ? -120 : 0,
            }}
          >
            <View style={styles.imgUserWrapper}>
              {isShowKeyboard ? (
                <>
                  <Image
                    source={require("../../assets/userImg.jpg")}
                    style={styles.imgUser}
                    resizeMode="stretch"
                  />

                  <View style={styles.removeImgIcon}>
                    <Image
                      source={require("../../assets/removeImg.png")}
                      resizeMode="stretch"
                    />
                  </View>
                </>
              ) : (
                <View style={styles.addImgIcon}>
                  <Image
                    source={require("../../assets/addImg.png")}
                    resizeMode="stretch"
                  />
                </View>
              )}
            </View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Registration</Text>
            </View>
            <View>
              <TextInput
                placeholder="Username"
                style={{
                  ...styles.input,
                  borderColor:
                    nameFocusInput == "username" ? "#FF6C00" : "#E8E8E8",
                }}
                onBlur={() => setNameFocusInput(null)}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setNameFocusInput("username");
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, username: value }))
                }
                value={state.username}
                onSubmitEditing={keyboardHideWithData}
              />
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
                textContentType="email"
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
                  setState((prevState) => ({ ...prevState, password: value }))
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
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Log in</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.link}
                onPress={linkToRegistration}
              >
                <Text style={styles.linkTitle}>Have an account? Log in</Text>
              </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
