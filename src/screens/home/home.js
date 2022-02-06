import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={{flex:1}} >
     <Text>Home screen</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
});
