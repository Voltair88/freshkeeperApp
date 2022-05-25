import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Storage,
  Additem,
  Shoppinglist,
  Login,
  Signup,
  Account,
} from "../screens/Screenindex";
import { RootTabParamList } from "../types/typesindex";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitle: "",
      }}
    >
      <HomeStack.Screen name="Account Screen" component={Account} />
      <HomeStack.Group screenOptions={{ headerShown: true }}>
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Signup" component={Signup} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          height: 0,
        },
        headerShadowVisible: false,
        headerTitle: "",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#49BEFF",
        tabBarStyle: {
          backgroundColor: "#033B5B",
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      })}
    >
      <Tab.Screen
        name="Additem"
        component={Additem}
        options={{
          tabBarLabel: "Additem",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialIcons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            ) : (
              <MaterialIcons name="add-circle" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          tabBarLabel: "Storage",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="fridge-outline"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons name="fridge" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Shoppinglist"
        component={Shoppinglist}
        options={{
          tabBarLabel: "Shoppinglist",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <FontAwesome5 name="clipboard-check" size={size} color={color} />
            ) : (
              <FontAwesome5 name="clipboard-list" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-circle"
                size={size}
                color={color}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
