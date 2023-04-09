import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  camera: {
    // height: 300,
    height: 200,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BDBDBD",
    borderRadius: 8,
    marginHorizontal: 16,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    color: "#BDBDBD",
  },
  textCamera: {
    color: "#BDBDBD",
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 8,

    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    marginHorizontal: 16,
  },
  markupPlace: {
    position: "absolute",
    top: 85,
    left: 16,
  },
  btn: {
    height: 51,
    borderRadius: 100,

    marginTop: 32,
    justifyContent: "center",

    paddingVertical: 16,

    borderColor: "#transparent",
    marginHorizontal: 16,
  },
  btnPublication: {
    color: "#fff",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btnBin: {
    marginRight: "auto",
    marginLeft: "auto",
    // justifyContent: "center",
    // paddingVertical: 50,
  },
});
