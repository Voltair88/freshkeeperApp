import { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity, Alert, Pressable, Animated } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem, useEditItem } from '../hooks';
import { ItemProps } from '../types';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Item = ({ item }: ItemProps) => {
  const user = useCheckUserStatus();
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  //animate the collapse of the item body when toggleExpanded is called
  const [height] = useState(new Animated.Value(50));
  useEffect(() => {
    Animated.timing(height, {
      toValue: collapsed ? 20 : 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [collapsed]);

  const promptDelete = () => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: useDeleteItem(item, user) },
    ]);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.itembody} onPress={toggleExpanded}>
        <Animated.View style={{ ...styles.itemheader, transform: [{ translateY: height }] }}>
          <Text style={styles.itemname}>{item.name}</Text>
          <Text style={styles.itemtext}>
            {item.amount} {item.amountType} {DaysLeft(item.expiration)}
          </Text>
          <MaterialCommunityIcons name={collapsed ? 'chevron-right' : 'chevron-down'} size={24} color="black" />
        </Animated.View>
        {!collapsed && (
          <View style={styles.itembody}>
            <View style={styles.itembuttons}>
              <Pressable style={styles.deleteButton} onPress={promptDelete}>
                <MaterialCommunityIcons name="delete-forever" size={24} color="black" />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
              <Pressable style={styles.deleteButton}>
                <MaterialCommunityIcons name="pencil" size={24} color="black" />
                <Text style={styles.deleteButtonText}>Edit</Text>
              </Pressable>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};
