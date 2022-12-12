import { auth, db } from '../firebase';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import React from 'react';
type Item = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  expiryDate: Date;
  userId: string;
};
export default function useItems() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(auth.currentUser);

  let loaditems = async () => {
    const q = query(collection(db, 'items'), where('userId', '==', user?.uid));

    const quarysnapshot = async () => {
      const q = query(collection(db, 'items'), where('uid', '==', user?.uid));
      const querySnapshot = await getDocs(q);
      const items: Item[] = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          name: doc.data().name,
          quantity: doc.data().quantity,
          unit: doc.data().unit,
          expiryDate: doc.data().expiryDate,
          userId: doc.data().userId,
        });
      });
      setItems(items);
      setLoading(false);
    };
    quarysnapshot();
  };
  React.useEffect(() => {
    loaditems();
  }, [user]);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  const addItem = async (name: string, quantity: number, unit: string, expiryDate: Date) => {
    await addDoc(collection(db, 'items'), {
      name: name,
      quantity: quantity,
      unit: unit,
      expiryDate: expiryDate,
      userId: user?.uid,
    });
    loaditems();
  };
  const deleteItem = async (id: string) => {
    await deleteDoc(doc(db, 'items', id));
    loaditems();
  };
  const updateItem = async (id: string, name: string, quantity: number, unit: string, expiryDate: Date) => {
    await setDoc(doc(db, 'items', id), {
      name: name,
      quantity: quantity,
      unit: unit,
      expiryDate: expiryDate,
      userId: user?.uid,
    });
    loaditems();
  };
  return {
    items,
    loading,
    addItem,
    deleteItem,
    updateItem,
  };
}
