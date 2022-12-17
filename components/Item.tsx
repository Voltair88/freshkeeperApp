import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';
import DaysLeft from '../hooks/useDaysLeft';
import { item, ItemProps } from '../types';

export const Item = ({ item }: ItemProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

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
        </View>
      )}
    </View>
  );
};
