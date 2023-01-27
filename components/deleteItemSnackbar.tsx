import { useState, useCallback, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Pressable, Dimensions, Animated } from 'react-native';
import styles from '../styles';
import { DaysLeft, useDeleteItem } from '../hooks';
import { ItemProps } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

type deleteItemSnackbarProps = {
  visible: boolean;
  onDismissSnackBar: () => void;
};

export function DeleteItemSnackbar(props: deleteItemSnackbarProps): JSX.Element {
  return (
    <Snackbar
      visible={props.visible}
      onDismiss={props.onDismissSnackBar}
      action={{
        label: 'OK',
        onPress: () => {
          props.onDismissSnackBar();
        },
      }}
    >
      deleted
    </Snackbar>
  );
}
