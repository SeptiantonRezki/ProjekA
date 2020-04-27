import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login } from '../organisems/pages';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Login' component={Login}/>
        </Stack.Navigator>
    )
}

export default Router;
