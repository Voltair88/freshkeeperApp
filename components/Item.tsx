import { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, Button, TouchableOpacity, Alert, Pressable } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem, useEditItem } from '../hooks';
import { ItemProps } from '../types';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';
export const Item = ({ item }: ItemProps) => {
  const user = useCheckUserStatus();
  const [collapsed, setCollapsed] = useState(true);
  const containerHeight = useSharedValue(0);

  const toggleExpanded = () => {
    if (collapsed) {
      containerHeight.value = withTiming(50, { duration: 200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
    } else {
      containerHeight.value = withTiming(0, { duration: 200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
    }
    setCollapsed(!collapsed);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: containerHeight.value,
    };
  });

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
      <Animated.View style={[styles.itembuttons, animatedStyle]}>
        <Pressable style={styles.deleteButton} onPress={promptDelete}>
          <MaterialCommunityIcons name="delete-forever" size={24} color="black" />
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
        <Pressable style={styles.deleteButton}>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
          <Text style={styles.deleteButtonText}>Edit</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};
