import "@/global.css"
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";
import { styled } from 'nativewind'

const SafeAreaView = styled(RNsafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/onbording"} className="rounded mt-4 bg-primary text-white p-4">Go to Onbording</Link>
      <Link href={'/(auth)/sign-up'} className='rounded mt-4 bg-primary text-white p-4'>Go to Sign Up</Link>
      <Link href={'/(auth)/sign-in'} className='rounded mt-4 bg-primary text-white p-4'>Go to Sign in</Link>

      <Link href={"/subscriptions/spotify"} className="rounded mt-4 bg-primary text-white p-4"> Spotify </Link> 
      <Link
        href={{
          pathname: '/subscriptions/[id]',
          params: { id: 'Calude' }
        }} className="rounded mt-4 bg-primary text-white p-4">
        Calud Max subscription.
      </Link>
    </SafeAreaView>
  );
}