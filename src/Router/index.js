import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { About, Add, Home, Keranjang, Login, Register, Update, ListBarang, A } from '../containers/pages';


const Stack = createStackNavigator();

const Router = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Mencoba Halaman' component={A} options={{headerShown: false}}/>

            <Stack.Screen name ='List Barang' component={ListBarang}/>
            
            <Stack.Screen name ='Tambah Produk' component={Add}/>
            
            <Stack.Screen name ='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name ='Login' component={Login} options={{headerShown: false}}/>


            <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name ='About' component={About} options={{headerShown: false}}/>
            <Stack.Screen name ='Keranjang' component={Keranjang} options={{headerShown: false}}/>
            <Stack.Screen name ='Ubah Produk' component={Update} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;
