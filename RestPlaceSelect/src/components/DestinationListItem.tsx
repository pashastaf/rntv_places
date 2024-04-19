import { StyleSheet, Image, Pressable } from 'react-native';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import { Product } from '../types';
import { Link } from 'expo-router';

export const DefaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png' 

type DestinationListItemProps = {
    product: Product;
}

const DestinationListItem = ({ product }: DestinationListItemProps) => {
  return (
  <Link href={(`/destination/${product.id}`)} asChild>
    <Pressable style={styles.container}>
      <Image 
        style={styles.image} 
        source={{ uri: product.image || DefaultImage }} 
        resizeMode='contain'
        />

      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}> ${product.price} </Text>
    </Pressable>
  </Link> 
  );
};

export default DestinationListItem

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      fontWeight: 'normal',
      color: 'blue'
    },
    image: {
      width: '100%',
      aspectRatio: 1
    }
  });