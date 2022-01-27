import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles";
import { Text, View } from "react-native";
<<<<<<< HEAD
import AppLoading from "expo-app-loading";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Inter_300Light, Inter_700Bold } from "@expo-google-fonts/inter";
import { Header, Navbar } from "./src/components/Component.index";
=======
import AppLoading from 'expo-app-loading';
import {Header, Footer} from "./src/components/component.index";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06

function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Roboto_400Regular,
    Inter_300Light,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
<<<<<<< HEAD
    return (
      <NavigationContainer>
        <Header />
        <View style={styles.body}>
          <Navbar />
        </View>
      </NavigationContainer>
    );
  }
=======
  return (
    <NavigationContainer>
      <Header />
      <View style={styles.body}>
      <Footer/>
      </View>
    </NavigationContainer>
  );
>>>>>>> b0a0a6d2916353515f2cd0d03ce26b66b9c6cb06
}
export default App;
