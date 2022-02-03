import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";
import { auth } from "../../firebase";
import { FontAwesome5 } from "@expo/vector-icons";

function Account({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Account</Text>
      <Text style={styles.devider} />
      <FontAwesome5 name="user-circle" size={40} color="black" />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}

export default Account;
