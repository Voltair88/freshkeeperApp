<<<<<<< HEAD
import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

function Additem({ navigation }: NativeStackScreenProps<RootTabParamList>) {
  return (
    <View>
      <Text style={styles.tabtitle}>Add item</Text>
      <Text style={styles.tabsubtitle}>
        choose your product, storage and expiration date.
=======
import React, { useState, useContext } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeParamList } from "../types/typesindex";

function Additem({ navigation }: NativeStackScreenProps<HomeParamList>) {
  // State
  const [name, setName] = useState("");


    // Functions

    const handleName = (name: string) => {
      setName(name);
    };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={handleName} value={name} />
      <Text>
        Additem
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06
      </Text>
    </View>
  );
}
export default Additem;
