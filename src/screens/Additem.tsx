import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Additem({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Add item</Text>
      <Text style={styles.tabsubtitle}>
        choose your product, storage and expiration date.
      </Text>
    </View>
  );
}
export default Additem;
