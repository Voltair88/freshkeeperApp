import React from 'react';
import { auth } from '../firebase';
import styles from '../styles';
import { Text, View, TextInput } from '../components/Themed';
import { Platform, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function AccountScreen(props: any) {
  const [user, setUser] = React.useState(auth.currentUser);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignout = async () => {
    await auth.signOut();
    props.navigation.navigate('TabOne');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>You are logged in</Text>
      <Text style={styles.tabsubtitle}>{user?.email}</Text>
      <Text style={styles.tabsubtitle}>{user?.uid}</Text>
      <Button title="Logout" onPress={handleSignout} />
    </View>
  );
}
