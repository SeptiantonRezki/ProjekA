import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

const About = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000)
    })
    return (
        <View>
            <Text>About guys</Text>
        </View>
    )
}

export default About;
