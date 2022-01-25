import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeParamList } from "../types/typesindex";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../../styles";
import { Additem, Storage } from "../screens/Screenindex";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#49BEFF",
        tabBarStyle: {
          backgroundColor: "#033B5B",
          paddingBottom: "10px",
          height: "65px",
        },
      })}
    >
      <Tab.Screen
        name="Additem"
        component={Additem}
        options={{
          tabBarLabel: "Additem",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          tabBarLabel: "Storage",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="playlist-add" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
