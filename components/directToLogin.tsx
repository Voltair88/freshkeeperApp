import { Text, View } from '../components';
import { Button } from 'react-native';
import styles from '../styles';

type props = {
  navigation: any;
};

export function DirectToLogin(props: props): JSX.Element {
  const handleOnPress = () => {
    props.navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Login to view your items</Text>
      <Button title="Login" onPress={handleOnPress} />
    </View>
  );
}
