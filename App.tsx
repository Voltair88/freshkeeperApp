import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, DetailsScreen } from "./src/screens/Screenindex";
import { RootStackParamList } from "./src/types/typesindex";
import Header from "./src/components/Header";
import styles from "./styles";
import { Text, StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

import AppLoading from 'expo-app-loading';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';



function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Freshkeeper</Text>
      </View>
      <View style={styles.body}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.navbar}>
        <Text>Navbar</Text>
      </View>
    </NavigationContainer>
  );
}
};
export default App;
