import { Text, View } from '../components';
import { Button } from 'react-native';
import styles from '../styles';

export function DirectToLogin({ navigation }: { navigation: any }): JSX.Element {
  const handleOnPress = () => {
    navigation.navigate('TabTwo');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Login to view your items</Text>
      <Button title="Login" onPress={handleOnPress} />
    </View>
  );
}
