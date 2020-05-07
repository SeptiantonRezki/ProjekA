import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';


const Input = ({keteranagan, placeholder, secureTextEntry, keyboardType}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>{keteranagan}</Text>
            <TextInput style={styles.TextInput} placeholder={placeholder} secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      marginVertical : 10
    },

    Text : {
        marginBottom : 15,
        fontFamily : 'sans-serif-medium',
        color : 'white'  
    }, 

    TextInput : {
        textAlign : 'center', 
        borderWidth : 0.7,
        width : 300,
        borderRadius : 10,
        borderColor : 'white',
        paddingHorizontal : 20

    }

    
});
  

export default Input;