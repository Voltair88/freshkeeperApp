import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";

function Additem({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
    <View>
      <Text>
        Additem
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
export default Additem;
