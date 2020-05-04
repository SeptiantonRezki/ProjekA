import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';


const Login = ({navigation}) => {

    handlePress = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style= {styles.atas}>
            <View style= {styles.tengah}>
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
        marginBottom : 20

    },

    bawah : {
        height :40,
        flexDirection : 'row',
    },
    
});