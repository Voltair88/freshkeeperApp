import React from 'react';
import { auth } from '../firebase';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native';

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
    props.navigation.navigate('Login');
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
