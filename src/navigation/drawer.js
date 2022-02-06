import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator }  from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home/home';
import BottomTabs from './bottomTabs';
const Drawer = createDrawerNavigator();
export default function DrawerNavigation(){
    return(
       
      <Drawer.Navigator initialRouteName="home">
        <Drawer.Screen name="home" component={BottomTabs} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
 
    
    )
}