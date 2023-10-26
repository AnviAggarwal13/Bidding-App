import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import RazorpayCheckout from "react-native-razorpay";

const Products = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isRazorpayModalVisible, setRazorpayModalVisible] = useState(false);
  const products = [
    {
      id: 1,
      name: "Foxes",
      description: "Description for Product 1",
      currentBid: 500,
      image: require('../../assets/pic1.jpg')
    },
    {
      id: 2,
      name: "Splash",
      description: "Description for Product 2",
      currentBid: 750,
      image: require('../../assets/pic2.jpg')
    },
    {
      id: 3,
      name: "Geometry",
      description: "Description for Product 3",
      currentBid: 600,
      image: require('../../assets/pic3.jpg')
    },
    {
      id: 4,
      name: "Foxes",
      description: "Description for Product 1",
      currentBid: 500,
      image: require('../../assets/pic1.jpg')
    },
    {
      id: 5,
      name: "Splash",
      description: "Description for Product 2",
      currentBid: 750,
      image: require('../../assets/pic2.jpg')
    },
    {
      id: 6,
      name: "Geometry",
      description: "Description for Product 3",
      currentBid: 600,
      image: require('../../assets/pic3.jpg')
    },
  ];

  const toggleModal = (productId) => {
    setModalVisible(!isModalVisible);
    setSelectedProductId(productId);
    setBidAmount("");
  };

  const handleBidPress = (productId) => {
    toggleModal(productId);
  };

  const handleBidSubmit = () => {
    // Handle the bid submission logic here, using the selectedProductId and bidAmount
    console.log(
      `Bid placed for product with ID ${selectedProductId} and amount $${bidAmount}`
    );

    navigation.navigate('BidPage', {
      productId: selectedProductId,
      bidAmount: bidAmount,
      productImage: products.find((product) => product.id === selectedProductId).image,
      productName: products.find((product) => product.id === selectedProductId).name,
      currentAmt:products.find((product) => product.id === selectedProductId).currentBid,
    });

    // setRazorpayModalVisible(true);
    toggleModal(null);
  };

  const handleRazorpayModalClose = () => {
    setRazorpayModalVisible(false);
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.currentBid}>Current Bid: ${item.currentBid}</Text>
      <Image
      source = {item.image}
        style={styles.image}
      />
       <TouchableOpacity
        style={styles.bidButton}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.bidButtonText}>Buy Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bidButton}
        onPress={() => handleBidPress(item.id)}
      >
        <Text style={styles.bidButtonText}>Place Bid</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRazorpayModal = () => {
    if (isRazorpayModalVisible) {
      return (
        <Modal isVisible={isRazorpayModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Razorpay Payment</Text>
            {/* <TouchableHighlight
              onPress={() => {
                var options = {
                  description: "Credits towards consultation",
                  image: "https://i.imgur.com/3g7nmJC.jpg",
                  currency: "INR",
                  key: "rzp_test_Gor59IPn9YLudi",
                  amount: "5000",
                  name: "Acme Corp",
                  order_id: "order_DslnoIgkIDL8Zt", // Replace this with an order_id created using Orders API.
                  prefill: {
                    email: "gaurav.kumar@example.com",
                    contact: "9191919191",
                    name: "Gaurav Kumar",
                  },
                  theme: { color: "#53a20e" },
                };
                console.log("Razorpay options:", options);
                RazorpayCheckout.open(options)
                  .then((data) => {
                    console.log("Razorpay success data:", data);
                    alert(`Success: ${data.razorpay_payment_id}`);
                  })
                  .catch((error) => {
                    console.error("Razorpay error:", error);
                    alert(`Error: ${error.code} | ${error.description}`);
                  });
              }}
            >
              <Text>Pay with Razorpay</Text>
            </TouchableHighlight> */}
            <Button title="Close" onPress={handleRazorpayModalClose} />
          </View>
        </Modal>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Place a Bid</Text>
          <TextInput
            style={styles.bidInput}
            placeholder="Enter Bid Amount"
            keyboardType="numeric"
            value={bidAmount}
            onChangeText={(text) => setBidAmount(text)}
          />
          <View style={styles.buttonContainer}>
  <Button title="Submit Bid" onPress={handleBidSubmit} color="#045c94" />
  <Button title="Cancel" onPress={() => toggleModal(null)} color="#dd3f3f" />
</View>

        </View>
      </Modal>

      {/* {renderRazorpayModal()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#fff8f5'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  productItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    marginTop: 8,
    fontSize: 16,
  },
  currentBid: {
    marginTop: 8,
    fontSize: 16,
  },
  bidButton: {
    marginTop: 16,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  bidButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bidInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 10,
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
  },
});

export default Products;
