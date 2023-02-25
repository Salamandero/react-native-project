import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
  },
  imgUser: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  imgUserWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    right: "50%",
    borderRadius: 16,
    transform: [{ translateX: 60 }],
    backgroundColor: "#F6F6F6",
    color: "#F6F6F6",
  },
  addImgIcon: {
    position: "absolute",
    resizeMode: "cover",
    width: 25,
    height: 25,
    bottom: 14,
    right: -12,
  },
  removeImgIcon: {
    position: "absolute",
    resizeMode: "cover",
    width: 25,
    height: 25,
    bottom: 14,
    right: -7,
  },
  form: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    paddingTop: 92,
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  input: {
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    borderWidth: 1,

    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    color: "#212121",
  },
  // "input:focus": {
  //   borderColor: "#FF6C00",
  // },
  // "input:last-of-type": {
  //   marginBottom: 70,
  //   paddingBottom: 70,
  //   backgroundColor: "red",
  // },
  visibilityPass: {
    position: "absolute",
    top: 15,
    right: 30,
  },
  btn: {
    height: 51,
    borderRadius: 100,

    marginTop: 43,
    justifyContent: "center",

    marginHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderColor: "#transparent",
  },
  btnTitle: {
    color: "#fff",
    marginRight: "auto",
    marginLeft: "auto",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
  },
  link: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  linkTitle: {
    fontSize: 16,
  },
});
