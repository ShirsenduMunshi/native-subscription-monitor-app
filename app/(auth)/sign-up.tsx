import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const signUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href={'/(auth)/sign-up'} className='rounded mt-4 bg-primary text-white p-4'>Sign Up</Link>
    </View>
  )
}

export default signUp;