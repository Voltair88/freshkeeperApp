import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Shoppinglist({
  navigation,
}: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Shoppinglist</Text>
      <Text style={styles.tabsubtitle}>
        this is your shoppinglist. see all shoppinglist items.
      </Text>
    </View>
  );
}

export default Shoppinglist;
