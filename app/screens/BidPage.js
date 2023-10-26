import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BidPage = ({ route }) => {
  const { currentAmt, bidAmount, productImage, productName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
      <Text style={styles.congratulations}>Congratulations!</Text>
        <Image source={productImage} style={styles.productImage} />
        <Text style={styles.label}>Product Name:</Text>
        <Text style={styles.value}>{productName}</Text>

        <Text style={styles.label}>Bid Amount:</Text>
        <Text style={styles.value}>${bidAmount}</Text>

        <Text style={styles.label}>Current Bid:</Text>
        <Text style={styles.value}>${currentAmt}</Text>
        {/* Add more components to display additional bid details */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  centeredContent: {
    alignItems: 'center', // Center content inside this view
  },
  congratulations: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productImage: {
    width: 300,
    height: 300,
    margin: 10,
    borderWidth: 2, // Add a border to the image
    borderColor: 'gray', // Border color
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16, // Adjust the spacing
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default BidPage;
