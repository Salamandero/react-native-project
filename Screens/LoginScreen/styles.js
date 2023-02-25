import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
  },
  form: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    paddingTop: 32,
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
