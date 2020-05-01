import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from '../../atom';

const LoginMolecul = () => {
    return (
        <View style= {styles.container}>
            <Input keteranagan="Email" placeholder="Email" secureTextEntry={false} keyboardType='email-address'/>
            <Input keteranagan="Password" placeholder="Password" secureTextEntry={true}/>
            <View style={{height : 40}}>
                <Button keteranagan="LOGIN"/>
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
  

export default LoginMolecul;