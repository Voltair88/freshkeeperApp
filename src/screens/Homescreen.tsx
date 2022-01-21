import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";
import Header from "../components/Header";

function HomeScreen({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
    <View>
      <Header />
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
export default HomeScreen;
