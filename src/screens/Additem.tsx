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
      </Text>
    </View>
  );
}
export default Additem;
