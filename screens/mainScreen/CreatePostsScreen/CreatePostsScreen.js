import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

//icons
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import { styles } from "./styles";

const initialState = {
  id: "",
  namePhoto: "",
  photoPlace: "",
  photo: null,
};

const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [nameFocusInput, setNameFocusInput] = useState(null);
  const [state, setState] = useState(initialState);
  const [location, setLocation] = useState(null);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        alert("Permission to access location was denied");
      }
      let locationData = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      };

      await setLocation(coords);
    })();
  }, []);

  console.log("====================================");
  console.log("location", location);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.takePictureAsync();

        setState((prevState) => ({
          ...prevState,
          photo: data.uri,
          // id: uuidv4(),
          id: Date.now().toString(),
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const sendPublication = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    navigation.navigate("DefaultScreen", { state });
    clearState();
  };

  const keyboardHideWithData = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const clearState = () => {
    setState((prevState) => ({
      ...prevState,
      id: "",
      namePhoto: "",
      photoPlace: "",
      photo: null,
    }));
  };
  // const canSend = () => {
  //   if (state.photo) {
  //     return true;
  //   }
  //   return false;
  // };

  // const canClear = () => {
  //   if (state.namePhoto || state.photoPlace || state.photo) {
  //     return true;
  //   }
  //   return false;
  // };
  return (
    <TouchableWithoutFeedback onPress={keyboardHideWithData}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Camera
            style={styles.camera}
            ref={(ref) => {
              setCameraRef(ref);
            }}
          >
            {state.photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: state.photo }}
                  style={{
                    width: Dimensions.get("window").width - 32,

                    height: 200,
                    borderRadius: 8,
                  }}
                />
              </View>
            )}
            <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
              <AntDesign
                style={styles.snap}
                name="camera"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </Camera>

          {state.photo ? (
            <Text style={styles.textCamera}>Edit photo</Text>
          ) : (
            <Text style={styles.textCamera}>Create photo</Text>
          )}
          <View>
            <TextInput
              placeholder="Name photo..."
              style={{
                ...styles.input,
                marginTop: 16,
                borderColor:
                  nameFocusInput == "namePhoto" ? "#FF6C00" : "#E8E8E8",
              }}
              onBlur={() => setNameFocusInput(null)}
              textContentType="name"
              onFocus={() => {
                setIsShowKeyboard(true);
                setNameFocusInput("namePhoto");
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, namePhoto: value }))
              }
              value={state.namePhoto}
              onSubmitEditing={keyboardHideWithData}
            />
            <TextInput
              placeholder="Name place..."
              style={{
                ...styles.input,
                paddingLeft: 25,
                marginTop: 8,
                position: "relative",
              }}
              onBlur={() => setNameFocusInput(null)}
              textContentType="location"
              onFocus={() => {
                setIsShowKeyboard(true);
                setNameFocusInput("photoPlace");
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, photoPlace: value }))
              }
              value={state.photoPlace}
              onSubmitEditing={keyboardHideWithData}
            />

            <MaterialCommunityIcons
              style={styles.markupPlace}
              name="map-marker-outline"
              size={24}
              color="#BDBDBD"
            />
          </View>
          {/* {state.photo ? (propDisabled = false) : (propDisabled = true)} */}

          <TouchableOpacity
            // disabled={canSend}
            activeOpacity={0.5}
            style={{
              ...styles.btn,
              // backgroundColor: canSend ? "#F6F6F6" : "#FF6C00",
              // color: canSend ? "#fff" : "#BDBDBD",
              backgroundColor: "#FF6C00",
              color: "#BDBDBD",
            }}
            onPress={sendPublication}
          >
            <Text style={styles.btnPublication}>Publication</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // disabled={canClear}
            disabled={false}
            activeOpacity={0.5}
            style={{
              ...styles.btn,
              // backgroundColor: canClear ? "#F6F6F6" : "#FF6C00",
              backgroundColor: "#FF6C00",
              width: 70,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onPress={clearState}
          >
            <Text style={styles.btnBin}>
              <Ionicons name="trash-bin-outline" size={20} color="#BDBDBD" />
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
