import React, { useEffect } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';


const A = ({navigation}) => {
    const handlePress = (halaman) => {
        navigation.navigate(halaman);
    }
    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent :'center', marginHorizontal : 20,}}>
            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Tambah Produk')}>
                <Text style ={{textAlign : 'center'}}>Halaman Add</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Login')}>
                <Text style ={{textAlign : 'center'}}>Halaman Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Register')}>
                <Text style ={{textAlign : 'center'}}>Halaman Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('List Barang')}>
                <Text style ={{textAlign : 'center'}}>Halaman List Barang</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Ubah Produk')}>
                <Text style ={{textAlign : 'center'}}>Halaman Ubah Produk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Keranjang')}>
                <Text style ={{textAlign : 'center'}}>Halaman Keranjang</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Home')}>
                <Text style ={{textAlign : 'center'}}>Halaman Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('About')}>
                <Text style ={{textAlign : 'center'}}>Halaman About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default A;
