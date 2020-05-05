import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { About, Add, Home, Login, Register, Update, ListBarang, A, ListBulanan, ListHarian, ListTanggal,
    TakeImage


} from '../containers/pages';


const Stack = createStackNavigator();

const Router = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name ='Take Image' component={TakeImage}/>
            <Stack.Screen name ='Mencoba Halaman' component={A} options={{headerShown: false}}/>
            <Stack.Screen name ='List Barang' component={ListBarang}/>

            
            <Stack.Screen name ='Tambah Produk' component={Add}/>
            
            <Stack.Screen name ='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name ='Login' component={Login} options={{headerShown: false}}/>


            <Stack.Screen name ='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name ='About' component={About} options={{headerShown: false}}/>
            <Stack.Screen name ='Ubah Produk' component={Update} options={{headerShown: false}}/>
            
            
            <Stack.Screen name ='List Bulanan' component={ListBulanan} options={{headerShown: false}}/>
            <Stack.Screen name ='List Tanggalan' component={ListTanggal} options={{headerShown: false}}/>
            <Stack.Screen name ='List Harian' component={ListHarian} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;
