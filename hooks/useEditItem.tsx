import React from 'react';
import styles from '../styles';
import { Text } from '../components/Themed';
import { item } from '../types';
import { db } from '../firebase';
import { collection, query, where, getDocs, QuerySnapshot } from 'firebase/firestore';

export const useEditItem = (item: item, user: any) => {};
