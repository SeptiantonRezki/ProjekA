import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


const Button = ({keteranagan}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.Text}>{keteranagan}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : { 
        backgroundColor:'#555111', 
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1,
        paddingHorizontal : 20
    },

    Text : {
        textAlign : 'center',
        color : 'white'
    }, 

});
  

export default Button;