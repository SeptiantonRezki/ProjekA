import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { About, Add, Home, Keranjang, Login, Register, Update } from '../containers/pages';


const Stack = createStackNavigator();

const Router = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name ='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name ='Add' component={Add} options={{headerShown: false}}/>
            <Stack.Screen name ='About' component={About} options={{headerShown: false}}/>
            <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name ='Keranjang' component={Keranjang} options={{headerShown: false}}/>
            <Stack.Screen name ='Update' component={Update} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;
