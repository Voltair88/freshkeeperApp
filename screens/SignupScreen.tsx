import { StatusBar } from 'expo-status-bar';
import { Platform, Button } from 'react-native';
import { Text, View, TextInput } from '../components/Themed';
import React from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import styles from '../styles';
import { RootTabScreenProps } from '../types';

export function ModalScreen({ navigation }: RootTabScreenProps<'Signup'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [validationMessage, setValidationMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setValidationMessage('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setValidationMessage('Check your email for a verification link');
      navigation.navigate('TabOne');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setValidationMessage('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        setValidationMessage('That email address is invalid!');
      } else if (error.code === 'auth/weak-password') {
        setValidationMessage('Password must be at least 6 characters');
      } else if (error.code === 'auth/internal-error') {
        setValidationMessage('An internal error has occurred');
      } else {
        setValidationMessage(error.message);
      }
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Signup</Text>
      <View style={styles.devider} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        textContentType="emailAddress"
        style={styles.logininput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.logininput}
        textContentType="newPassword"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        secureTextEntry={true}
        textContentType="newPassword"
        style={styles.logininput}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Text>{validationMessage}</Text>
      {loading ? <Button title="Loading..." disabled={true} /> : <Button title="Signup" onPress={handleSignup} />}
      <View style={styles.devider} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.tabsubtitle}>Already have an account?</Text>
      <Button title="Login" onPress={handleLogin} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
