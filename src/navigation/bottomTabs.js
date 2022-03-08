import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogIn from '../screens/login/login';
import Home from '../screens/home/home';

import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './drawer';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarLabel: '',
      // }}
      // tabBarOptions={{
      //   style: {
      //     backgroundColor: '#313d49',
      //   },
      // }}
      initialRouteName="home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="explore" color="black" size={25} />
          ),
        }}
        name="explore"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite-border" color="black" size={25} />
          ),
        }}
        name="favorite"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" color="black" size={25} />
          ),
        }}
        name="cart"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="black"
              size={25}
            />
          ),
        }}
        name="profile"
        component={Home}
      />
    </Tab.Navigator>
  );
}
