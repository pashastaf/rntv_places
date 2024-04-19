import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '@/src/components/Button'

const CreateDestinationScreen = () => {

    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const onCreate =() => {
        console.warn('Creating product',name ,country);
    }

  return (
    <View>
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
      <Button text='Create' onPress={(onCreate)}/>
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
    }
}) 


export default CreateDestinationScreen