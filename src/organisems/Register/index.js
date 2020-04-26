import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const Register = () => {
  return (
      <View style={{paddingHorizontal : 10, marginTop : 30}}>
        <Text>Selamat Datang</Text>
        <TextInput placeholder="Masukkan Email Anda" keyboardType="email-address"/>
        <TextInput placeholder="Masukkan Password Anda" secureTextEntry={true} />
      </View>
  );
};

const styles = StyleSheet.create({
    container : {
        // box : {
        //     "paddingHorizontal" : 20,
        //     "marginTop" : 20,
        // },
    },    
  });
  


export default Register;
