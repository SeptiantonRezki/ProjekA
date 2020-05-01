import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonNavigation, ButtonAction, Input} from '../../../components/atom';


const Register = ({navigation}) => {

    handlePress = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style= {styles.atas}>
            <View style= {styles.tengah}>
                <Input keteranagan="Nama" placeholder="Nama" secureTextEntry={false} />
                <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address'/>
                <Input keteranagan="Password" placeholder="Password" secureTextEntry={true}/>
                <ButtonAction keterangan="REGISTER"/>
            </View>

            <View style= {styles.bawah}>
                <ButtonNavigation  keterangan='LOGIN' onPress={() => handlePress('Login')} />
                <ButtonNavigation  keterangan='REGISTER' onPress={() => handlePress('Register')}/>
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
    }
    
});