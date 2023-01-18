import { useState, useEffect, useCallback, useRef } from 'react';
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
  const animatedValue = useRef(new Animated.Value(0)).current;

  // animate item expansion and collapse

  useEffect(() => {
    if (collapsed) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [collapsed]);

  const height = collapsed ? 0 : 50;
  const containerHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  // delete item and prompt user to confirm

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
        <View style={styles.itemheader}>
          <Text style={styles.itemname}>{item.name}</Text>
          <Text style={styles.itemtext}>
            {item.amount} {item.amountType} {DaysLeft(item.expiration)}
          </Text>
          <MaterialCommunityIcons name={collapsed ? 'chevron-right' : 'chevron-down'} size={24} color="black" />
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: containerHeight, overflow: 'hidden' }}>
        {!collapsed && (
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
        )}
      </Animated.View>
    </View>
  );
};
