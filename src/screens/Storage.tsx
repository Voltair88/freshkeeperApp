import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";

function Storage({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text>Storage Screen</Text>
    </View>
  );
}

export default Storage;
