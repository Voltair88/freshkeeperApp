import styles from '../styles';
import { Text, View } from '../components/Themed';
import { db, auth } from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RootTabScreenProps } from '../types';
import { Button } from 'react-native';

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

  if (user) {
    useFocusEffect(
      React.useCallback(() => {
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
          setLoading(false);
        });
      }, [user])
    );
  }
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (user === null) {
    return (
      <View style={styles.container}>
        <Text>Please loggin</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Items</Text>
      {items.map((item) => (
        <Text style={styles.amountTypeLabel} key={item.id}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}
