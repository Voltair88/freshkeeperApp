import { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert, Pressable, Dimensions } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem } from '../hooks';
import { ItemProps } from '../types';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Item = ({ item }: ItemProps): JSX.Element => {
  const user = useCheckUserStatus();
  const [collapsed, setCollapsed] = useState(true);

  // delete item and prompt user to confirm

  const promptDelete = useCallback(() => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: useDeleteItem(item, user) },
    ]);
  }, [item, user]);

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.itemheader}>
          <Text style={collapsed ? styles.itemleftcollapsed : styles.itemleftexpanded}>{item.name}</Text>
          {collapsed && (
            <View style={styles.itemtextbanner}>
              <Text style={styles.itemtext}>
                {item.amount} {item.amountType}
              </Text>
              <Text style={styles.verticaldevider}>|</Text>
              <Text style={styles.itemtext}>{DaysLeft(item.expiration)}</Text>
              <Text style={styles.verticaldevider}>|</Text>
            </View>
          )}
          <MaterialCommunityIcons name={collapsed ? 'chevron-down' : 'chevron-up'} size={24} color="black" />
        </View>
        {!collapsed && (
          <View>
            <View style={styles.itemtextexpandedbanner}>
              <Text style={styles.itemtextexpanded}>
                {item.amount} {item.amountType}
              </Text>
              <Text style={styles.itemtextexpanded}>{DaysLeft(item.expiration)}</Text>
            </View>
            <View style={styles.itembuttons}>
              <Pressable style={styles.deleteButton} onPress={promptDelete}>
                <MaterialCommunityIcons
                  name="delete-forever"
                  size={Dimensions.get('window').width * 0.1}
                  color="black"
                />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
              <Pressable style={styles.deleteButton}>
                <MaterialCommunityIcons name="pencil" size={Dimensions.get('window').width * 0.1} color="black" />
                <Text style={styles.deleteButtonText}>Edit</Text>
              </Pressable>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
