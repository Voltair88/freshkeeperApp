import { Text, View,Button } from 'react-native';
import styles from '../../styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeParamList } from '../types/typesindex';


function HomeScreen({ navigation }: NativeStackScreenProps<HomeParamList>) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  export default HomeScreen;