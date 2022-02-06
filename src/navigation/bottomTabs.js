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
import {color} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigation from './drawer';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
 

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#313d49',
        },
      }}
      initialRouteName="home">
   


      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="video" color="#FFFF" size={30} />
          ),
        }}
        name="save"
        component={Home}
      />
     
    </Tab.Navigator>
  );
}
