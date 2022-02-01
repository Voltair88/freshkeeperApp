import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Account({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Account</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

export default Account;
