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
