import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const signIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href={'/(auth)/sign-in'} className='rounded mt-4 bg-primary text-white p-4'>Create Account</Link>
      <Link href={"/"}>Home</Link>
    </View>
  )
}

export default signIn;