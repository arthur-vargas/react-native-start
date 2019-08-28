import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const HomeScreen = () => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>HomeScreen.. v2</Text>
  </SafeAreaView>
);

// const styles = StyleSheet.create({});

HomeScreen.navigationOptions = {
  title: 'HOME',
};

export default HomeScreen;
