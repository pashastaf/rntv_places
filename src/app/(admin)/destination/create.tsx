import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '@/src/components/Button'
import { DefaultImage } from '@/src/components/DestinationListItem';
import Colors from '@/src/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useDeleteDestination, useDestination, useInsertDestination, useUpdateDestination } from '@/src/api/destinations';

const CreateDestinationScreen = () => {

    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const { id: idString } = useLocalSearchParams();
    const id = parseFloat(
      typeof idString === 'string' ? idString : idString?.[0]
    );
    const isUpdating = !!idString;

    const {mutate: insertDestination} = useInsertDestination();
    const {mutate: updateDestination} = useUpdateDestination();
    const {data: updatingDestination} = useDestination(id);
    const {mutate: deleteDestination} = useDeleteDestination();


    useEffect(() => {
      if(updatingDestination) {
        setTitle(updatingDestination.title);
        setCountry(updatingDestination.country);
      }
    }, [updatingDestination])

    const router = useRouter();

    const resetFields = () => {
      setTitle('');
      setCountry('');
    };

    const validateInput = () => {
      setErrors('');
      if (!title) {
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
        onUpdate();
      } else {
        onCreate();
      }
    };

    const onCreate = async () => {
      if (!validateInput()) {
        return;
      }
      insertDestination(
        { title, country },
        {
          onSuccess: () => {
            resetFields();
            router.back();
          },
        }
      );
    };

    const onUpdate = async () => {
      if (!validateInput()) {
        return;
      }
      updateDestination(
        { id, title, country },
        {
          onSuccess: () => {
            resetFields();
            router.back();
          },
        }
      );
    };

    const onDelete = () => {
      deleteDestination(id, {
        onSuccess: () => {
          resetFields();
          router.replace('/(admin)');
        },
      });
    };

    const confirmDelete = () => {
      Alert.alert('Confirm', 'Are you sure you want to delete this product', [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: onDelete,
        },
      ]);
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

  return (
    <View style={styles.contrainer}>
      <Stack.Screen options={{ title: isUpdating ? 'Update Destination' : 'Create Destination' }} />
      <Image source={{ uri: image || DefaultImage }} style={styles.image} />
      <Text style={styles.textButton} onPress={pickImage}>
        Select Image
      </Text>
      <Text style={styles.title}>Title</Text>
      <TextInput 
        placeholder='park' 
        style={styles.input} 
        value={title}
        onChangeText={setTitle}
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