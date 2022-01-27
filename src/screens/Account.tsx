<<<<<<< HEAD
import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Account({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
}

export default Account;
=======
import React from 'react';
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";
import  styles from "../../styles";

export default function Account({ navigation }: NativeStackScreenProps<HomeParamList>) {
  return (
      <View>
        <Text>Account</Text>
      </View>
  );
}
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06
