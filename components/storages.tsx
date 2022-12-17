import { useMemo } from 'react';
import { storages } from '../types';

export const useStorages = () => {
  return useMemo(
    () => [
      { name: 'Freezer', backgroundColor: '#49beff' },
      { name: 'Fridge', backgroundColor: '#73abff' },
      { name: 'Pantry', backgroundColor: '#ffe1d5' },
      { name: 'Other', backgroundColor: '#a6a6a6' },
    ],
    []
  );
};
