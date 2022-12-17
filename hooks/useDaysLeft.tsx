import React from 'react';
import styles from '../styles';
import { Text } from '../components/Themed';

const DaysLeft = (date: string) => {
  const expirationdate = new Date(date);
  const todaysdate = new Date();
  const diffTime = Math.abs(todaysdate.getTime() - expirationdate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.ceil(diffDays / 7);
  const diffMonths = Math.ceil(diffDays / 30);

  if (diffDays < 7) {
    return (
      <Text style={styles.itemtext}>
        {diffDays} {diffDays === 1 ? 'day' : 'days'} left
      </Text>
    );
  } else if (diffDays < 30) {
    return (
      <Text style={styles.itemtext}>
        {diffWeeks} {diffWeeks === 1 ? 'week' : 'weeks'} left
      </Text>
    );
  } else {
    return (
      <Text style={styles.itemtext}>
        {diffMonths} {diffMonths === 1 ? 'month' : 'months'} left
      </Text>
    );
  }
};

export default DaysLeft;
