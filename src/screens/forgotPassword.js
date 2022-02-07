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
import Input from '../components/input';
import CustomButton from '../components/button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ForgotPassword({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={style.header}>
          <View>
            <Image style={style.img} source={require('../assets/logo.png')} />
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={style.centerDiv}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <AntDesign name="arrowleft" color="grey" size={25} />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 25, color: '#f7764c'}}>
                Forgot Password?
              </Text>
            </View>

            <View style={style.inpContainer}>
              <Input title=" Enter your email adress" />
            </View>
            <View style={style.inpContainer}>
              <Text>
                We will send you a message to set or reset your new password
              </Text>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={{fontSize: 25}}>Send code</Text>
            </View>

            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={{width: 50}}>
                <CustomButton
                  txtColor="#FFFF"
                  bgColor="#f7764c"
                  height={50}
                  radius={30}
                  show={true}
                  iconName={AntDesign}
                  iconTitle="arrowright"
                  iconColor="#FFFF"
                  //   title=""
                />
              </View>
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
    marginTop: 30,
  },
  inpContainer: {
    marginTop: 10,
  },
  forgotDiv: {
    marginTop: 10,
  },
});
