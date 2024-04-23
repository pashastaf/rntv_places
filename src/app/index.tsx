import { View, Text } from 'react-native';
import React from 'react';
import Button from '@/src/components/Button';
import { Link } from 'expo-router';


const index = () => {
  return (
      <Link href={'/sign-in'} asChild>
        <Button text="Sign in" />
      </Link>
  );
};

export default index;