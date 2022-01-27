import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
<<<<<<< HEAD
import { RootTabParamList } from "../types/typesindex";

function Storage({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text>Storage Screen</Text>
=======
import { HomeParamList } from "../types/typesindex";

function Storage({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
    <View>
      <Text>Storage</Text>
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06
    </View>
  );
}

export default Storage;
