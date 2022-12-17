import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import useCheckUserStatus from './useCheckUserStatus';
import { item } from '../types';
import { collection, addDoc } from 'firebase/firestore';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { db, auth } from '../firebase';

export default function useSendItem(props: item) {
  const user = useCheckUserStatus();
  const sendItem = async () => {
    const dateCreated = moment().format('YYYY-MM-DD');
    const itemId = uuidv4();
    const docRef = collection(db, 'items');
    await addDoc(docRef, {
      name: props.name,
      amount: props.amount,
      amountType: props.amountType,
      storage: props.storage,
      expiration: props.expiration,
      dateCreated: dateCreated,
      user: user?.uid || null,
      id: itemId || null,
    });
  };

  return sendItem;
}
