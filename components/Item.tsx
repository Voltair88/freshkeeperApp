import { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem } from '../hooks';
import { ItemProps } from '../types';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { useFocusEffect } from '@react-navigation/native';

export const Item = ({ item }: ItemProps) => {
  const user = useCheckUserStatus();
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };
  const handleDelete = useDeleteItem(item, user);

  return (
    <View style={styles.item}>
      <View style={styles.itemheader}>
        <Text style={styles.itemname}>{item.name}</Text>
        <Button title={collapsed ? 'Expand' : 'Collapse'} onPress={toggleExpanded} />
      </View>
      {!collapsed && (
        <View style={styles.itembody}>
          <Text style={styles.itemtext}>
            Amount: {item.amount} {item.amountType}
          </Text>
          <Text style={styles.itemtext}>Expiration: {DaysLeft(item.expiration)} </Text>
          <Button title="Edit" onPress={() => {}} />
          <Button title="Delete" onPress={handleDelete} />
        </View>
      )}
    </View>
  );
};
