import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Storage({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Storage</Text>
      <Text style={styles.tabsubtitle}>
        this is your storage. see all items in storage, or sorted in preferred
        sections.
      </Text>
    </View>
  );
}

export default Storage;
