import { item } from '../types';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const useDeleteItem = (item: item, user: any) => {
  const handleDelete = () => {
    try {
      deleteDoc(doc(db, `users/${user.uid}/items/${item.id}`));
    } catch (error) {
      console.error(error);
    }
  };
  return handleDelete;
};
