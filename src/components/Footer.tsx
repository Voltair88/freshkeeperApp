import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Additem,
  Storage,
  Shoppinglist,
  Account,
} from "../screens/Screenindex";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../../styles";

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
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
            <MaterialIcons name="playlist-add" color={color} size={26} />
          ),         
        }}
      />
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          tabBarLabel: "Storage",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fridge" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shoppinglist"
        component={Shoppinglist}
        options={{
          tabBarLabel: "Shoppinglist",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
