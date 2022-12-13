import { auth, db } from '../firebase';
import { collection, query, where, getDocs, doc, QuerySnapshot } from 'firebase/firestore';
import React from 'react';

export default function useItems() {
  const [items, setItems] = React.useState([]);
}
