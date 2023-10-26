import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const Payment = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [num, setNum] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Function to handle payment submission
  const handlePayment = () => {
    // Add logic to handle the payment and process the user's input data
    console.log('First Name:', fname);
    console.log("Last Name:", lname);
    console.log("Mobile Number:", num);
    
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={fname}
        onChangeText={(text) => setfName(text)}
      />

<Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={lname}
        onChangeText={(text) => setlName(text)}
      />
<Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={num}
        onChangeText={(text) => setNum(text)}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.label}>Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter payment method"
        value={paymentMethod}
        onChangeText={(text) => setPaymentMethod(text)}
      />

      <Button title="Pay Now" onPress={handlePayment} color="#045c94" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    alignItems:'center'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
});

export default Payment;
