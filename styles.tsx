import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  // Header
  header: {
    flex: 1,
    backgroundColor: "#0E4462",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  headertitle: {
    color: "#49BEFF",
    fontSize: 20,
    fontFamily: "Pacifico_400Regular",
  },

  // Tabbars
  tabtitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 26,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 5,
  },
  tabsubtitle: {
    borderBottomColor: "#6363637f",
    fontFamily: "Inter_300Light",
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
  },

  // App
  body: {
    flex: 10,
  },

  // Additem
  nameinput: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.05,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 4,
  },
  numberinput: {
    height: Dimensions.get("window").height * 0.1,
    paddingHorizontal: 90,
    borderRadius: 4,
    marginVertical: 10,
    borderColor: "#49BEFF",
  },
  devider: {
    borderBottomWidth: 1,
    borderBottomColor: "#6363637f",
    marginTop: 10,
    height: Dimensions.get("window").height * 0.01,
    marginHorizontal: 20,
  },
  flexrow: {
    flexDirection: "row",
  },
  itemname: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    left: Dimensions.get("window").width * 0.3,
  },
  itemnumber: {
    fontFamily: "Inter_700Bold",
    backgroundColor: "#49BEFF",
    borderRadius: Dimensions.get("window").height * 0.08,
    color: "white",
    width: Dimensions.get("window").width * 0.08,
    height: Dimensions.get("window").width * 0.08,
    textAlign: "center",
    paddingVertical: 5,
    left: Dimensions.get("window").width * 0.03,
    marginTop: 10,
    position: "absolute",
  },

  // Account 

  

  // Login

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  button: {
    backgroundColor: "#49BEFF",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  logininput: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.05,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 4,
  },
});

export default styles;
