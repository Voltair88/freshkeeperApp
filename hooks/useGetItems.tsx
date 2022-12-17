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
  const [loading, setLoading] = useState(false);

  const debouncedQuery = debounce((user) => {
    setLoading(true);
    try {
      const q = query(collection(db, 'items'), where('user', '==', user?.uid));
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
    } finally {
      setLoading(false);
    }
  }, 500);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        debouncedQuery(user);
      }
    }, [user])
  );

  return { items, loading };
}
