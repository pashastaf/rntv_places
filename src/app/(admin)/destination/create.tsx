import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'
import { DefaultImage } from '@/src/components/DestinationListItem';
import Colors from '@/src/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateDestinationScreen = () => {

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const { id } = useLocalSearchParams();
    const isUpdating = !!id;

    const resetFields = () => {
      setName('');
      setCountry('');
    };

    const validateInput = () => {
      setErrors('');
      if (!name) {
        setErrors('Name is required');
        return false;
      }
      if (!country) {
        setErrors('Country is required');
        return false;
      }
      return true;
    };

    const onSubmit = () => {
      if (isUpdating) {

      } else {
        onCreate();
      }
    };

    const onCreate = () => {
      if (!validateInput()) {
        return;
      };
    
      console.warn('Creating product',name ,country);

      resetFields();
    };

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDelete = () => {
    console.warn('DELETE??');
  };

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure?", [
      { 
        text: "Cancel",
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: onDelete
      }
    ]);
  };

  return (
    <View style={styles.contrainer}>
      <Stack.Screen options={{ title: isUpdating ? 'Update Destination' : 'Create Destination' }} />
      <Image source={{ uri: image || DefaultImage }} style={styles.image} />
      <Text style={styles.textButton} onPress={pickImage}>
        Select Image
      </Text>
      <Text style={styles.title}>Name</Text>
      <TextInput 
        placeholder='park' 
        style={styles.input} 
        value={name}
        onChangeText={setName}
        />
      <Text style={styles.title}>Country</Text>
      <TextInput 
        placeholder='Moldova'
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        // keyboardType='numeric'
        />
      <Text style={{ color: 'red' }}>{errors}</Text>
      <Button text={isUpdating ? 'Update' : 'Create'} onPress={(onSubmit)}/>
      { isUpdating && <Text onPress={confirmDelete} style={styles.textButton}> Delete </Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        color: 'gray',
        fontSize: 16,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    image: {
      width: '50%',
      aspectRatio: 1,
      alignSelf: 'center',
    },
    textButton: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: Colors.light.tint,
      marginVertical: 10,
    },
});

export default CreateDestinationScreen;