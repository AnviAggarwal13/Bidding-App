import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert   
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Implement user registration logic here
    // You can send the user's data to your backend server for registration

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    Alert.alert('Success',"New account created successfully!")
    // You can add API calls to register the user here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register a New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
     <Button title="Register" onPress={handleRegistration} color="green" width="80%" />
     <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Already have an account? Login here.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff8f5'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  loginLink: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
  },
});
