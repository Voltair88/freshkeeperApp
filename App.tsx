import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Inter_300Light, Inter_700Bold } from "@expo-google-fonts/inter";
import { Header, Navbar } from "./src/components/Component.index";

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
    return (
      <NavigationContainer>
        <Header />
        <View style={styles.body}>
          <Navbar />
        </View>
      </NavigationContainer>
    );
  }
}
export default App;
