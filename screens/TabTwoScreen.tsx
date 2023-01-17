import styles from '../styles';
import { Text, View, useStorages, Item, DirectToLogin } from '../components';
import { RootTabScreenProps } from '../types';
import { Button, ScrollView } from 'react-native';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import useGetItems from '../hooks/useGetItems';

export function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const user = useCheckUserStatus();
  const { items } = useGetItems();

  const storages = useStorages();

  if (!user) {
    return <DirectToLogin navigation={navigation} />;
  }

  console.table(items);
  return (
    <ScrollView>
      <View style={styles.storageContainer}>
        <Text style={styles.tabsubtitle}>Items</Text>
        {storages.map((storage) => (
          <View key={storage.name}>
            <Text style={{ ...styles.storageLabel, backgroundColor: storage.backgroundColor }}>{storage.name}</Text>
            {items
              .filter((item) => item.storage === storage.name)
              .map((item) => (
                <Item key={item.id} item={item} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
