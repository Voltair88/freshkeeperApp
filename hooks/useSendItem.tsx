import { item } from '../types';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useCallback } from 'react';

export const useSendItem = () => {
  const sendItem = useCallback(async (item: item) => {
    try {
      await addDoc(collection(db, `users/${item.user}/items`), {
        id: item.id,
        name: item.name,
        amount: item.amount,
        amountType: item.amountType,
        storage: item.storage,
        expiration: item.expiration,
        dateCreated: item.dateCreated,
        user: item.user,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { sendItem };
};
