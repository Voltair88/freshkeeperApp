import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
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
    marginHorizontal: "auto",
    textAlign: "center",
    borderBottomWidth: 1.5,
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 20,
    borderBottomColor: "#6363637f",
  },
  tabsubtitle: {
    fontFamily: "Inter_300Light",
    fontSize: 12,
    fontStyle: "italic",
    marginHorizontal: "auto",
    textAlign: "center",
    paddingVertical: 20,
  },
  body: {
    flex: 10,
  },
  navbar: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default styles;
