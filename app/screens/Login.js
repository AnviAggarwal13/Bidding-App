import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Login = ({}) => {
  const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
 
    const storeUsername = async()=>{
        try{
            await AsyncStorage.setItem("username", username);
        }catch(e){
            alert("details not saved: "+e);
        }
        
    }

    const storePassword = async()=>{
      try{
          await AsyncStorage.setItem("password", password);
          Alert.alert('Success', "Log In successful!");
          navigation.navigate("Products")
      }catch(e){
          alert("details not saved: "+e);
      }
  }

    const handleLogin=()=>{
        if(username.trim()){
            storeUsername();
        }else{
           Alert.alert('Error', "username required");
        }

        if(password.trim()){
          storePassword();
        }else{
          Alert.alert("Error", "Password is required");
        }
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} color="green" />
        <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>
          Don't have an account? Register here.
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff8f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
  },
  registerLink: {
    marginTop: 16,
    textAlign: 'center',
    color: 'blue',
  },
});


export default Login;
