import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";

function Storage({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
    <View>
      <Text>Storage</Text>
    </View>
  );
}

export default Storage;
