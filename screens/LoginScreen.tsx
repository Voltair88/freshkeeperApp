import { RootTabScreenProps } from '../types';
import React from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles';
import { Button } from 'react-native';
import { Text, View, TextInput } from '../components/Themed';

export function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validationMessage, setValidationMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(auth.currentUser);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setValidationMessage('Login successful');
      navigation.navigate('TabOne');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setValidationMessage('No user found with that email');
      } else if (error.code === 'auth/wrong-password') {
        setValidationMessage('Incorrect password');
      } else {
        setValidationMessage(error.message);
      }
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

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
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {loading ? <Button title="Loading..." disabled /> : <Button title="Login" onPress={handleLogin} />}
      <Text>{validationMessage}</Text>
      <Button title="Don't have an account? Sign up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
