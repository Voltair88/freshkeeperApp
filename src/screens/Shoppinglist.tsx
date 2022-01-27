<<<<<<< HEAD
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
=======
import React from 'react';
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";
import  styles from "../../styles";

export default function Shoppinglist({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
      <View>
        <Text>Shoppinglist</Text>
      </View>
  );
}
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06
