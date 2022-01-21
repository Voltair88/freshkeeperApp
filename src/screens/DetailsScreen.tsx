import { Text, View,Button } from 'react-native';
import styles from '../../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeParamList } from '../types/typesindex';

function DetailsScreen({ navigation }: NativeStackScreenProps<HomeParamList>) {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.push('Home')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }


  export default DetailsScreen;