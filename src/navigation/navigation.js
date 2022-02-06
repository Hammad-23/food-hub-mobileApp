/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import { createDrawerNavigator }  from '@react-navigation/drawer';
import BottomTabs from './bottomTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../utils/constant';

import Home from '../screens/home/home';
import LogIn from '../screens/login/login'
import Register from '../screens/register/register'
import DrawerNavigation from './drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="login">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={LogIn} />
          <Stack.Screen name="register" component={Register} />
          


        

          
          
       
        </Stack.Navigator>
        
        
      </NavigationContainer>
    </View>
  );
};


// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{style: {backgroundColor: Colors.primaryColor,}}}>
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="home-sharp"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:10
//               }}>
//               Startseite
//             </Text>
//           ),
//         }}
//         name="Welcome"
//         component={SignUpScreen}
//       />

//       <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon2
//               name="cast-for-education"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({color, focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:10
//               }}>
//               Meine Kurse
//             </Text>
//           ),
//         }}
//         name="Register"
//         component={RegisterStack}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon3
//               name="envelope-o"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({color, focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:10

//               }}>
//               Kontakt
//             </Text>
//           ),
//         }}
//         name="Contact"
//         component={Contact}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="md-logo-dropbox"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:10
//               }}>
//               Impressum
//             </Text>
//           ),
//         }}
//         name="adress"
//         component={Adress}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="logo-xbox"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:10
//               }}>
//               Datenschutz
//             </Text>
//           ),
//         }}
//         name="DataProtection"
//         component={DataProtection}
//       />
//        <Tab.Screen
//         options={{
//           tabBarIcon: ({focused, color, size}) => (
//             <Icon
//               name="newspaper-outline"
//               size={22}
//               color={focused ? '#FFF' : '#cecece'}
//             />
//           ),
//           tabBarLabel: ({focused}) => (
//             <Text
//               style={{
//                 color: focused ? '#FFF' : '#cecece',
//                 textAlign: 'center',
//                 fontSize:8
//               }}>
//               Teilnahmebedingungen
//             </Text>
//           ),
//         }}
//         name="PrivacyPolicy"
//         component={PrivacyPolicy}
//       />
//     </Tab.Navigator>
//   );
// }

export default AppNavigator;
