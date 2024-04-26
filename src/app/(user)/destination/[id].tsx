import React from 'react';
import { useState } from 'react';
import { View, Text , Image, StyleSheet, Pressable} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { DefaultImage } from '@/src/components/DestinationListItem';
import destinations from '@/assets/data/destiantions';
import { useDestination } from '@/src/api/destinations';
import { isLoaded } from 'expo-font';

const sizes = ['S','M','L','XL']

const DestinationDetailScreen = () => {
  const { id: idSting } = useLocalSearchParams();
  const id = parseFloat(typeof idSting === 'string' ? idSting : idSting[0])

  const {data: destination, error, isLoading} = useDestination(id);

  const [selectedSize, setSelectedSize] = useState('M');


  if (!destination) {
    return <Text> destination not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: destination.title }} />
      <Image 
        style={styles.image} 
        source={{ uri: DefaultImage }} 
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
      <Text style={styles.country}> {destination.country} </Text>
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
  country: {
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
