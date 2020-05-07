import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';


const Login = ({navigation}) => {

    handlePress = (screen) => {
        navigation.navigate(screen);
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

                <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address'/>
                <Input keteranagan="Password" placeholder="Password" secureTextEntry={true}/>
                <ButtonAction keterangan="LOGIN" onPress={() => handlePress('Home')}/>
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