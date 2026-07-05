import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { SafeAreaView as RNsafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNsafeAreaView);
const settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>settings</Text>
    </SafeAreaView>
  )
}

export default settings;