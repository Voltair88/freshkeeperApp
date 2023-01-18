import React from 'react';
import styles from '../styles';
import { Text } from '../components/Themed';
import { item } from '../types';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

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
