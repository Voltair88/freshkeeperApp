import styles from "../../styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Signup from "./Signup";
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
const LoginStack = createNativeStackNavigator();

function Accountnav() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Signup" component={Signup} />
    </LoginStack.Navigator>
  );
}

export default Accountnav;
