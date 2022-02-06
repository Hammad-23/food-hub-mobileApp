import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../components/input';
import CustomButton from '../../components/button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Register({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Image
              style={style.img}
              source={require('../../assets/logo.png')}
            />
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={style.centerDiv}>
            <View>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#f7764c'}}>
                Register
              </Text>
            </View>
            <View style={style.inpContainer}>
              <Input title="Full Name" />
            </View>
            <View style={style.inpContainer}>
              <Input title="Email" />
            </View>
            <View style={style.inpContainer}>
              <Input keyboardType="number-pad" title="Mobile Number" />
            </View>
            <View style={style.inpContainer}>
              <Input secureTextEntry={true} title="Password" />
            </View>

            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: 150}}>
                <CustomButton
                  txtColor="#FFFF"
                  bgColor="#f7764c"
                  height={50}
                  radius={25}
                  title="Sign-up"
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
                }}
                style={{width: 100}}>
                <Text style={{color: 'grey'}}>
                  Already have an account?{' '}
                  <Text style={{color: '#f7764c'}}>Login </Text>{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  header: {
    backgroundColor: '#FFFF',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  centerDiv: {
    width: '80%',
    marginTop: 20,
  },
  inpContainer: {
    marginTop: 10,
  },
  forgotDiv: {
    marginTop: 10,
  },
});
