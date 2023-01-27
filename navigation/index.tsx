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
import useCheckUserStatus from '../hooks/useCheckUserStatus';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }): JSX.Element {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const user = useCheckUserStatus();
  return (
    <Stack.Navigator>
      {user ? (
        <>
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
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  // the size of the icons
  const size = Dimensions.get('window').width * 0.08;
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
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ) : (
              <MaterialCommunityIcons name="cart-outline" color={'white'} size={size} />
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
                  size={size}
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
                  size={size}
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
              <MaterialCommunityIcons name="fridge" color={color} size={size} />
            ) : (
              <MaterialCommunityIcons name="fridge-outline" color={'white'} size={size} />
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
                  size={size}
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
                  size={size}
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
              <MaterialCommunityIcons name="food" color={color} size={size} />
            ) : (
              <MaterialCommunityIcons name="food-outline" color={'white'} size={size} />
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
                  size={size}
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
                  size={size}
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
