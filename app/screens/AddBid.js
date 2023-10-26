import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';

const AddBid = () => {
  const [productName, setProductName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  var ImagePicker = require('react-native-image-picker');
  const handleSelectImage = () => {
    const options = {
      title: 'Select an Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.show(options, (response) => {
      if (response.didCancel) {
        console.log('Image selection canceled');
      } else if (response.error) {
        console.log('Image selection error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  const handleBidSubmit = () => {
    // You can send the product name, bid amount, and selectedImage URI to your server
    console.log('Product Name:', productName);
    console.log('Bid Amount:', bidAmount);
    console.log('Selected Image:', selectedImage);

    // Add your API call logic here

    // Clear form fields and selected image
    setProductName('');
    setBidAmount('');
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Bid</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bid Amount"
        keyboardType="numeric"
        value={bidAmount}
        onChangeText={setBidAmount}
      />
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.selectedImage}
        />
      )}
      
      <TouchableOpacity
        style={styles.imageButton}
        onPress={handleSelectImage}
      >
        <Text style={styles.imageButtonText}>Select Image</Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
      <Button title="Submit Bid" onPress={handleBidSubmit} color="#045c94" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  selectedImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 10,
  },
  imageButton: {
    backgroundColor: '#045c94',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  imageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  btnContainer:{
    marginVertical:10,
  }
});

export default AddBid;
