import React from 'react';
import {View, StyleSheet} from 'react-native';

import { LoginMolecul, LoginRegisterMolecul } from '../../../components/moleculs';

const Register = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <LoginMolecul/>
            <LoginRegisterMolecul />
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
});