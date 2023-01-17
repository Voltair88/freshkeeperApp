import { Text, View } from '../components';
import { Button } from 'react-native';
import styles from '../styles';
import useCheckUserStatus from '../hooks/useCheckUserStatus';

export function DirectToLogin({ navigation }: any) {
  const user = useCheckUserStatus();
  const handleOnPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Login to view your items</Text>
      <Button title="Login" onPress={handleOnPress} />
    </View>
  );
}
