import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from '../../atom';

const RegisterMolecul = () => {
    return (
        <View style= {styles.container}>
            <Input keteranagan="Nama" placeholder="Nama" secureTextEntry={false} />
            <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address'/>
            <Input keteranagan="Password" placeholder="Password" secureTextEntry={true}/>
            <View style={{height : 40}}>
                <Button keteranagan="REGISTER"/>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center', 
        alignItems : 'center', 
        paddingHorizontal: 10,
        marginBottom : 20
    },
});
  

export default RegisterMolecul;