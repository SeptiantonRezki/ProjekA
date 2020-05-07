import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';
import { State } from 'react-native-gesture-handler';
import { registerUserAPI } from '../../../redux';


const Register = ({navigation}) => {

    const stateRegister = useSelector(state => state.reducerRegister);
    const Dispatch = useDispatch();
    const registerApi = (data) => Dispatch(registerUserAPI(data));
    const [user , setUser]= useState({
        nama : 'aaa',
        email : '',
        password : '',
    });



    handlePress = (screen) => {
        navigation.navigate(screen);
    }

    const handleChange = (input_name , input_value) => {
        setUser({
            ...user,
            [input_name] : input_value
        })
    }

    const handleClick = () => {
        const {email, password} = user;
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                alert("masuk");

                console.log(res.user);
            })
            .catch(function(error) { 
                console.log('error', error);
            })
        
        // const res = await registerApi(user);
        // if(res == true) {
        //     alert("berhasil");
        // }else {
        //     alert("gagal");
        // }
    }

    return (
        <View style= {styles.atas}>
            <View style= {styles.tengah}>
                <Input keteranagan="Nama" placeholder="Nama" secureTextEntry={false} value={user.nama} onChangeText={(value) => handleChange('nama', value)} />
                <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address' value={user.email} onChangeText={(value) => handleChange('email', value)}/>
                <Input keteranagan="Password" placeholder="Password" secureTextEntry={true} value={user.password} onChangeText={(value) => handleChange('password', value)}/>
                <TouchableOpacity style={styles.buttonAction} onPress={handleClick}>
                    <Text style={styles.Text}>Register</Text>
                </TouchableOpacity>
            </View>

            

        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    
    atas : {
        flex : 1,     
    },
    tengah : {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center', 
        paddingHorizontal: 10,
        marginBottom : 20

    },
    bawah : {
        height :40,
        flexDirection : 'row',
    },
    buttonAction : { 
        backgroundColor:'#555111', 
        justifyContent : 'center', 
        alignItems : 'center',
        paddingHorizontal : 20,
        height : 40,
        marginTop : 10, 
        borderRadius : 5
    },
    Text : {
        textAlign : 'center',
        color : 'white'
    },
    
});