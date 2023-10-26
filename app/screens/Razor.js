import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

const Razor = () => {

    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_nNdE7rrSwumAYv',
          amount: '500000',
          name: 'Acme Corp',
          prefill: {
            email: 'akshay@razorpay.com',
            contact: '8955806560',
            name: 'Akshay Bhalotia'
          },
          theme: {color: '#F37254'}
        }
        console.log(options)
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
          console.log(error)
        });
      }}>
      <Text style = {styles.text}>PAY</Text>
      </TouchableHighlight>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    width:50
  }
});

export default Razor;