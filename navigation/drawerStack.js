import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainStack from './mainStack';
import ScreenGeneral from '../screens/screenGeneral'

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator 
      initialRouteName="ScreenGeneral" 
      screenOptions={ { headerShown: false } }
      gestureEnabled='false'
      >
      <Drawer.Screen name="Principal" component={ScreenGeneral} />
      <Drawer.Screen name="Cerrar Sesión" component={MainStack} />
    </Drawer.Navigator>    
  );
}