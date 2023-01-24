/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, Text, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AccountScreen } from '../screens/Account';
import {
  TabThreeScreen,
  ModalScreen,
  NotFoundScreen,
  TabOneScreen,
  TabTwoScreen,
  LoginScreen,
} from '../screens/screensIndex';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { auth } from '../firebase';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }): JSX.Element {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Freshkeeper"
        component={BottomTabNavigator}
        options={{
          header() {
            return (
              <View
                style={{
                  backgroundColor: '#0e4462',
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 20,
                }}
              >
                <Text style={{ fontFamily: 'pacifico-regular', fontSize: 20, color: 'white' }}>Freshkeeper</Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Signup" component={ModalScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: '#0e4462',
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Add item',
          headerTitleAlign: 'center',
          headerStyle: {
            height: Dimensions.get('window').height * 0.05,
          },
          tabBarIcon: ({ color }) =>
            useIsFocused() ? (
              <MaterialCommunityIcons name="cart" color={color} />
            ) : (
              <MaterialCommunityIcons name="cart-outline" color={'white'} />
            ),
          headerRight: () =>
            auth.currentUser ? (
              <Pressable
                onPress={() => navigation.navigate('Account')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Storage',
          headerTitleAlign: 'center',
          headerStyle: {
            height: Dimensions.get('window').height * 0.05,
          },
          tabBarIcon: ({ color }) =>
            useIsFocused() ? (
              <MaterialCommunityIcons name="fridge" color={color} />
            ) : (
              <MaterialCommunityIcons name="fridge-outline" color={'white'} />
            ),
          headerRight: () =>
            auth.currentUser ? (
              <Pressable
                onPress={() => navigation.navigate('Account')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
        })}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
          title: 'Recipes',
          headerTitleAlign: 'center',
          headerStyle: {
            height: Dimensions.get('window').height * 0.05,
          },
          tabBarIcon: ({ color }) =>
            useIsFocused() ? (
              <MaterialCommunityIcons name="food" color={color} />
            ) : (
              <MaterialCommunityIcons name="food-outline" color={'white'} />
            ),
          headerRight: () =>
            auth.currentUser ? (
              <Pressable
                onPress={() => navigation.navigate('Account')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
              >
                <FontAwesome5
                  name="user-circle"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
        })}
      />
    </BottomTab.Navigator>
  );
}
