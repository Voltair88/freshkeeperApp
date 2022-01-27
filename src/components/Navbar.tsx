import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Storage,
  Additem,
  Account,
  Shoppinglist,
} from "../screens/Screenindex";
import { RootTabParamList } from "../types/typesindex";
import styles from "../../styles";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#49BEFF",
        tabBarStyle: {
          backgroundColor: "#033B5B",
          paddingBottom: 10,
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Additem"
        component={Additem}
        options={{
          tabBarLabel: "Additem",
        }}
      />
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          tabBarLabel: "Storage",
        }}
      />
      <Tab.Screen
        name="Shoppinglist"
        component={Shoppinglist}
        options={{
          tabBarLabel: "Shoppinglist",
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
}
