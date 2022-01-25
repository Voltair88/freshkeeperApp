import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Additem } from "./src/screens/Screenindex";
import { RootStackParamList } from "./src/types/typesindex";
import styles from "./styles";
import { Text, View } from "react-native";
import AppLoading from 'expo-app-loading';
import {Header, Footer} from "./src/components/component.index";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <Header />
      <View style={styles.body}>
      <Footer/>
      </View>
    </NavigationContainer>
  );
}
};
export default App;
