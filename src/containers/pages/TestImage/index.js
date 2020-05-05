import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const TakeImage = () => {
    const [gambar, setGambar] = useState({
        nama : ''

    });

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
    };
    const handleImage = () => {
        ImagePicker.launchImageLibrary(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            
                this.setGambar({
                    nama: source,
                });
            }
        
        })
    }

    return (
        <View style={{flex : 1, alignItems : 'center', justifyContent :'center'}}>
            <Text style={{padding : 20, backgroundColor : 'blue'}} onPress={() => handleImage()}>Ambil</Text>
            <Text>ok</Text>
        </View>
    )
}

 export default TakeImage;