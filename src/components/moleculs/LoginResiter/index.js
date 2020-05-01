import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../atom';

const LoginRegisterMolecul = () => {
    return (
        <View style= {styles.container}>
            <Button  keteranagan='LOGIN'/>
            <Button  keteranagan='REGISTER'/>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container : {
        height :40,
        flexDirection : 'row',
    },

});
  

export default LoginRegisterMolecul;