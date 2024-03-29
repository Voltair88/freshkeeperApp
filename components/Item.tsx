import { useState, useCallback, useRef } from 'react';
import { TouchableOpacity, Alert, Pressable, Dimensions, Animated } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem } from '../hooks';
import { ItemProps } from '../types';
import useCheckUserStatus from '../hooks/useCheckUserStatus';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from './Themed';

export const Item = ({ item }: ItemProps): JSX.Element => {
  const user = useCheckUserStatus();
  const [collapsed, setCollapsed] = useState(true);
  const expandAnimation = useRef(new Animated.Value(0)).current;
  const colorScheme = useColorScheme();

  const toggleExpand = useCallback(
    (collapsed: boolean) => {
      setCollapsed(!collapsed);
      Animated.timing(expandAnimation, {
        toValue: collapsed ? 1 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    },
    [collapsed, expandAnimation]
  );

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
      <TouchableOpacity onPress={() => toggleExpand(collapsed)}>
        <View style={styles.itemheader}>
          <Text>{item.name}</Text>
          <View style={styles.itemtextbanner}>
            <Text style={styles.itemtext}>
              {item.amount} {item.amountType}
            </Text>
            <Text style={styles.verticaldevider}>|</Text>
            <Text style={styles.itemtext}>{DaysLeft(item.expiration)}</Text>
            <Text style={styles.verticaldevider}>|</Text>
          </View>
          <MaterialCommunityIcons
            name={collapsed ? 'chevron-down' : 'chevron-up'}
            size={24}
            color={styles.itemtext.color}
          />
        </View>
        <Animated.View
          style={{
            height: expandAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 100] }),
            overflow: 'hidden',
          }}
        >
          <View>
            <View style={styles.itembuttons}>
              <Pressable style={styles.deleteButton} onPress={promptDelete}>
                <MaterialCommunityIcons
                  name="delete-forever"
                  size={Dimensions.get('window').width * 0.1}
                  color={Colors[colorScheme].text}
                />
                <Text darkColor={Colors[colorScheme].text}>Delete</Text>
              </Pressable>
              <Pressable style={styles.deleteButton}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={Dimensions.get('window').width * 0.1}
                  color={Colors[colorScheme].text}
                />
                <Text darkColor={Colors[colorScheme].text}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
