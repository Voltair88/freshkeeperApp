import styles from '../styles';
import { Text, View } from '../components/Themed';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RootTabScreenProps } from '../types';
import { Button, ScrollView } from 'react-native';
import { Item } from '../components/Item';
type Item = {
  id: string;
  name: string;
  amount: number;
  amountType: string;
  storage: string;
  expiration: string;
  dateCreated: string;
  user: string;
};
export function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const [user, setUser] = React.useState(auth.currentUser);
  const [items, setItems] = React.useState<Item[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useFocusEffect(() => {
    if (user) {
      setLoading(true);
      const q = query(collection(db, 'items'), where('user', '==', user?.uid));
      getDocs(q).then((querySnapshot: QuerySnapshot) => {
        const items: Item[] = [];
        querySnapshot.forEach((doc) => {
          items.push({
            id: doc.id,
            name: doc.data().name,
            amount: doc.data().amount,
            amountType: doc.data().amountType,
            storage: doc.data().storage,
            expiration: doc.data().expiration,
            dateCreated: doc.data().dateCreated,
            user: doc.data().user,
          });
        });
        setItems(items);
      });
      setLoading(false);
    }
  });

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.tabsubtitle}>Login to view your items</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  const storages = [
    { name: 'Freezer', backgroundColor: '#49beff' },
    { name: 'Fridge', backgroundColor: '#73abff' },
    { name: 'Pantry', backgroundColor: '#ffe1d5' },
    { name: 'Other', backgroundColor: '#a6a6a6' },
  ];

  return (
    <ScrollView>
      <View style={styles.storageContainer}>
        <Text style={styles.tabsubtitle}>Items</Text>
        {loading ? (
          <Text>Loading...</Text>
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

<Text style={{ ...styles.storageLabel, backgroundColor: '#49beff' }}>Freezer</Text>;
