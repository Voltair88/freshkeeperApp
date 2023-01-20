import { db } from '../firebase';
import { collection, query, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { useFocusEffect } from '@react-navigation/native';
import useCheckUserStatus from './useCheckUserStatus';
import { item } from '../types';

export default function useGetItems() {
  const user = useCheckUserStatus();
  const [items, setItems] = useState<item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        debouncedQuery(user);
      }
    }, [user])
  );

  const debouncedQuery = debounce((user) => {
    try {
      setIsLoading(true);
      const q = query(collection(db, `users/${user.uid}/items`));
      getDocs(q).then((querySnapshot: QuerySnapshot) => {
        const items: item[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id } as item);
        });
        setItems(items);
      });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, 500);

  return useMemo(() => {
    return { items, isLoading };
  }, [items, isLoading]);
}
