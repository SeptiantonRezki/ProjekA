import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';


const TestDatabase = ({navigation}) => {
    const {reducerRegister} = useSelector(state => state);4
    const {user_firebase} = reducerRegister;
    const {uid} = user_firebase;
    const reference = database().ref('/users/123');
    
    const handleClickTambah = () => {    
        database()
            .ref(`/${uid}`)
            .push({
                harga : '2000',
                tanggal : Date(),
            })
            .then(() => {
                console.log("berhasil menambahkan data")
                alert("berhasil menambahkan data")
            });
    }

    const handleClickUpdate = (id_click) => {    
        database()
            .ref(`/${uid}/${id_click}`)
            .set({
                harga : '2000',
                tanggal : Date(),
            })
            .then(() => {
                console.log("berhasil update data")
                alert("berhasil update data")
            });
    }
    if(user_firebase == null){
        navigation.navigate('Login');
    }else {
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <TouchableOpacity  onPress={handleClickTambah} style={{margin : 20, padding : 10, backgroundColor : 'blue'}}>
                    <Text style={{color:'white'}}>Tambah</Text>   
                </TouchableOpacity>
                <TouchableOpacity  onPress={handleClickTambah} style={{margin : 20, padding : 10, backgroundColor : 'blue'}}>
                    <Text style={{color:'white'}}>Update</Text>   
                </TouchableOpacity>
            </View>
            
        )
    }
}

export default TestDatabase;