import React from 'react';
import { auth } from '../firebase';
import styles from '../styles';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native';
import useCheckUserStatus from '../hooks/useCheckUserStatus';

type AccountScreenProps = {
  navigation: any;
};

export function AccountScreen(props: AccountScreenProps): JSX.Element {
  const user = useCheckUserStatus();

  const handleSignout = async () => {
    await auth.signOut();
    props.navigation.navigate('Login');
  };
  if (!user) {
    return <Text style={styles.tabsubtitle}>You are not logged in</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.tabsubtitle}>You are logged in</Text>
        <Text style={styles.tabsubtitle}>{user?.email}</Text>
        <Text style={styles.tabsubtitle}>{user?.uid}</Text>
        <Button title="Logout" onPress={handleSignout} />
      </View>
    );
  }
}
