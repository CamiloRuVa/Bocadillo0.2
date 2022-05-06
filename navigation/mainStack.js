import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import screenInicio from '../screens/screenInicio'
import screenRegistro from '../screens/screenRegistro'
//import ScreenGeneral from '../screens/screenGeneral'
import DrawerStack from './drawerStack'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
            <Stack.Navigator
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen 
                    name = 'Inicio'
                    component = { screenInicio }
                />
                <Stack.Screen 
                    name = 'Registro'
                    component = { screenRegistro }
                />
                <Stack.Screen 
                    name = 'General'
                    component = { DrawerStack }
                />                
            </Stack.Navigator>        
    )    
}

export default MainStack