import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { About, Add, Home, Keranjang, Login, Register, Update } from '../organisems/pages';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name ='About' component={About}/>
            <Stack.Screen name ='Add' component={Add}/>
            <Stack.Screen name ='Home' component={Home}/>
            <Stack.Screen name ='Keranjang' component={Keranjang}/>
            <Stack.Screen name ='Login' component={Login}/>
            <Stack.Screen name ='Register' component={Register}/>
            <Stack.Screen name ='Update' component={Update}/>
        </Stack.Navigator>
    )
}

export default Router;
