import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#0E4462',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#49BEFF',
    fontSize: 20,
    fontFamily: 'Pacifico_400Regular',
  },
  body: {
    flex: 12,
    backgroundColor: 'blue',
  },
  navbar: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default styles;
