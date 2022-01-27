import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";

function Shoppinglist({
  navigation,
}: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text>Shoppinglist Screen</Text>
    </View>
  );
}

export default Shoppinglist;
