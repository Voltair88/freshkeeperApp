import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
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
  body: {
    flex: 10,
  },
  navbar: {
    flex: 1,
  },
  nameinput: {
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 4,
  },
  numberinput: {
    height: 70,
    paddingHorizontal: 90,
    borderRadius: 4,
    marginVertical: 10,
    borderColor: "#49BEFF",
  },
  devider: {
    borderBottomWidth: 1,
    borderBottomColor: "#6363637f",
    marginTop: 10,
    height: 1,
    marginHorizontal: 20,
  },
  flexrow: {
    flexDirection: "row",
  },
  itemname: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    marginTop: 10,
    left: Dimensions.get("window").width * 0.25,
    width: Dimensions.get("window").width * 0.5,
    right: Dimensions.get("window").width * 0.25,
  },
  itemnumber: {
    fontFamily: "Inter_700Bold",
    backgroundColor: "#49BEFF",
    borderRadius: 30 / 2,
    color: "white",
    width: 30,
    height: 30,
    textAlign: "center",
    paddingVertical: 5,
    left: 10,
    marginTop: 10,
  },
});

export default styles;
