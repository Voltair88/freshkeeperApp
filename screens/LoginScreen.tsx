import { RootTabScreenProps } from '../types';
import React from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles';
import { Button } from 'react-native';
import { Text, View, TextInput } from '../components';

export function LoginScreen({ navigation }: RootTabScreenProps<'Login'>): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validationMessage, setValidationMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setValidationMessage('Login successful');
      navigation.navigate('TabOne');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setValidationMessage('Invalid email or password');
      } else {
        setValidationMessage(error.message);
      }
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tabsubtitle}>Login</Text>
      <TextInput
        style={styles.logininput}
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.logininput}
        placeholder="Password"
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {loading ? <Button title="Loading..." disabled /> : <Button title="Login" onPress={handleLogin} />}
      <Text>{validationMessage}</Text>
      <Text style={styles.devider} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.tabsubtitle}>Don&apos;t have an account?</Text>
      <Button title=" Sign up" onPress={handleSignup} />
    </View>
  );
}
