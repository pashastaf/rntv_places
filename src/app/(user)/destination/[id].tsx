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
      <Text> Select size </Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
        <Pressable
            onPress={() => { setSelectedSize(size) }}
            style={[
            styles.size, 
            {
              backgroundColor: selectedSize === size ? 'gainsboro' : 'white'
            },
           ]}
            key={size}>
            <Text style={[
            styles.sizeText, 
            {
              color: selectedSize === size ? 'black' : 'gray'
            },
           ]}>
              {size}</Text>
        </Pressable>
        ))}
      </View>
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
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius:25,
    alignItems: "center",
    justifyContent: "center"
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "500"
  }
});


export default DestinationDetailScreen;
