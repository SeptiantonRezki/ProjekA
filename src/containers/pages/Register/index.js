import React, { useState, Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../../components/atom';
import { registerUserAPI } from '../../../redux';



const Register = ({navigation}) => {

    const stateRegister = useSelector(state => state.reducerRegister);
    const dispatch = useDispatch();
    const registerApi = (data) => dispatch(registerUserAPI(data));
    
    const [user , setUser]= useState({
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

    const handleClick = async () => {
        
        const res = await registerApi(user);
        if(res) {
            
        }
    }

    return (
        <Fragment>
        <View style= {styles.atas}>
            <View style= {styles.tengah}>
                <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address' value={user.email} onChangeText={(value) => handleChange('email', value)}/>
                <Input keteranagan="Password" placeholder="Password" secureTextEntry={true} value={user.password} onChangeText={(value) => handleChange('password', value)}/>
                <TouchableOpacity style={styles.buttonAction} onPress={handleClick}>
                    <Text style={styles.Text}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
        </Fragment>
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