import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { auth } from "../../firebase";
import Accountnav from "./Accountnav";

function Account({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Account</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}

export default Account;
