import React from 'react';
import { useState } from 'react';
import { View, Text , Image, StyleSheet, Pressable} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import products from '@/assets/data/products';
import { DefaultImage } from '@/src/components/DestinationListItem';

const sizes = ['S','M','L','XL']

const DestinationDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text> Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image 
        style={styles.image} 
        source={{ uri: product.image || DefaultImage }} 
        resizeMode='contain'
        />
      <Text style={styles.price}> ${product.price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 18,
    fontWeight: "bold"
  }
});


export default DestinationDetailScreen;
