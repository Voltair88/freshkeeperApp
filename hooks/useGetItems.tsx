import { db } from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { useFocusEffect } from '@react-navigation/native';
import useCheckUserStatus from './useCheckUserStatus';
import { item } from '../types';

export default function useGetItems() {
  const user = useCheckUserStatus();
  const [items, setItems] = useState<item[]>([]);

  const debouncedQuery = debounce((user) => {
    try {
      const q = query(collection(db, `users/${user.uid}/items`));
      getDocs(q).then((querySnapshot: QuerySnapshot) => {
        const items: item[] = [];
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
    } catch (error) {
      console.error(error);
    }
  }, 500);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        debouncedQuery(user);
      }
    }, [user])
  );

  return { items };
}
