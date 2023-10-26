// WelcomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

const Welcome = ({ navigation }) => {
    
  return (
    // <ImageBackground source = {require('../../assets/Galleria.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Image source = {require('../../assets/Galleria.png')} style={styles.backgroundImage}></Image>
      {/* <Text style={styles.welcomeText}>Hello!</Text> */}
     <View style = {styles.btnContainer}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login') } color='#2b6a1e'
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')} color='#58a58e'
      />
      </View> 
    </View>
  // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff8f5'
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  backgroundImage: {
    // flex: 1,
    // resizeMode: 'cover', // or 'contain' or 'stretch'
    height: 270,
    width: 270
  },
});

export default Welcome;
