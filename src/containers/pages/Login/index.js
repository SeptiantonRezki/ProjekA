import React, { useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';
import { loginUserAPI } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';



const Login = ({navigation}) => {
    const userFirebase = useSelector(state => state);
    const dispatch = useDispatch();
    const loginApi = (data) => dispatch(loginUserAPI(data));


    const [user , setUser] = useState({
        email : '',
        password : ''
    })
    handlePress = (screen) => {
        navigation.navigate(screen);
    }

    const handleChange = (input_name, input_value) => {
        setUser({
            ...user,
            [input_name] : input_value
        })
        console.log(user);        
    }


    const handleLogin = async () => {
        const res = await loginApi(user);
        if(res) {
            // localStorage.setItem('userData', JSON.stringify(res));
            // this.setState({
            //     email : '',
            //     password : ''
            // })
            dispatch({type : 'CHANGE_LOGIN', value : true});
            navigation.navigate('Home');
        }
        console.log(userFirebase);    
    }

    return (
        <View style= {styles.atas}>
            <View style= {styles.tengah}>
                <Image 
                    style={{width : 200, height : 200, borderRadius : 5, }} 
                    source={require('../../../assets/logo/logo.jpg')} 
                />
                <Text style={{color: 'white', textAlign : 'center', marginVertical : 10, fontSize : 20, fontFamily : 'sans-serif-medium'}}>
                    Selamat Datang
                </Text>

                <Input keteranagan="Email" value={user.email} onChangeText={(value) => handleChange('email', value)} placeholder="Email" secureTextEntry={false} keyboardType='email-address'/>
                <Input keteranagan="Password" value={user.password} onChangeText={(value) => handleChange('password', value)} placeholder="Password" secureTextEntry={true}/>
                <ButtonAction keterangan="LOGIN" onPress={handleLogin}/>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    
    atas : {
        flex : 1,     
    },

    tengah : {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center', 
        paddingHorizontal: 10,

        backgroundColor : 'lightblue',
        height : '100%',

    },

    bawah : {
        height :40,
        flexDirection : 'row',
    },
    
});