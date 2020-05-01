import React from 'react';
import {View, StyleSheet} from 'react-native';

import { RegisterMolecul, LoginRegisterMolecul } from '../../../components/moleculs';

const Register = ({navigation}) => {
    return (
        <View style= {styles.container}>
            <RegisterMolecul/>
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