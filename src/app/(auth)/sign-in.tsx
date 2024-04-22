import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { ChangeEvent, useState, useEffect} from 'react';
import Button from '@/src/components/Button';
import Colors from '@/src/constants/Colors';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import users from '@/assets/data/users';


const SignInScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [client, setClient] = useState(false);
  const pathArr = ['(admin)/destination', '(user)/destination'];
  
  // const { id } = useLocalSearchParams();
  // const user = users.find((p) => p.id.toString() === id);

  

  // const userCheck = () => {
  //   if(login == user?.login && user.position == 1) {

  //   }
  // };

  function userCheck(login: string, password: string): number{
    let flag = 0;
    users.map((el) => {
      if(el.login === login && el.password === password){
        flag = el.position;
      }
    })
    return flag;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign in' }} />

      <Text style={styles.label}>Login</Text>
      <TextInput
        value={login}
        onChangeText={setLogin}
        placeholder="pashastaf"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />
      <Link href={pathArr[userCheck(login, password) != 0 ? userCheck(login, password) - 1 : 0]}>
        <Button text="Sign in" />
      </Link>
      <Link href="/sign-up" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;