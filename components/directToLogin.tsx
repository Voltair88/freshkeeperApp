import { Text, View } from '../components';
import { Button } from 'react-native';
import styles from '../styles';

type DirectToLoginProps = {
  navigation: any;
};

export function DirectToLogin(props: DirectToLoginProps): JSX.Element {
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
