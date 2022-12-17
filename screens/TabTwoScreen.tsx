import styles from '../styles';
import { Text, View } from '../components/Themed';
import { useMemo } from 'react';
import { RootTabScreenProps } from '../types';
import { Button, ScrollView, FlatList } from 'react-native';
import { Item } from '../components/Item';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import useGetItems from '../hooks/useGetItems';

export function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const user = useCheckUserStatus();
  const { items, loading } = useGetItems();

  const storages = useMemo(
    () => [
      { name: 'Freezer', backgroundColor: '#49beff' },
      { name: 'Fridge', backgroundColor: '#73abff' },
      { name: 'Pantry', backgroundColor: '#ffe1d5' },
      { name: 'Other', backgroundColor: '#a6a6a6' },
    ],
    []
  );

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.tabsubtitle}>Login to view your items</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.storageContainer}>
        <Text style={styles.tabsubtitle}>Items</Text>
        {loading ? (
          <Text style={styles.tabsubtitle}>Loading...</Text>
        ) : (
          storages.map((storage) => (
            <View key={storage.name}>
              <Text style={{ ...styles.storageLabel, backgroundColor: storage.backgroundColor }}>{storage.name}</Text>
              {items
                .filter((item) => item.storage === storage.name)
                .map((item) => (
                  <Item key={item.id} item={item} />
                ))}
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
