import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import KontenHarga from '../../../components/atom/harga';

const Home = ({navigation}) => {

    const handlePrees = (halaman) => {
        navigation.navigate(halaman)
    }


    return (
        <View style={{ paddingTop : 10, flex : 1, backgroundColor : 'lightblue'}}>
            <View style={{flex : 0.05, marginHorizontal : 20, backgroundColor : 'blue', opacity : 0.5, paddingHorizontal : 10, paddingVertical : 10, borderRadius :5}}>
                <TextTicker
                    style={{ fontSize: 15, color : 'white' }}
                    duration={8000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                    >
                    Second Peace - Perhatian Aplikasi Ini Masih Dalam Pengembangan
                </TextTicker>    
            </View>
            <View style={{ marginHorizontal : 20, flex : 0.2, backgroundColor : '#0080ff', marginTop : 10, flexDirection : 'row', borderRadius : 5}}>

                <TouchableOpacity onPress={() => handlePrees('Add')} style={{flex : 1, alignItems : 'center', justifyContent : 'center', paddingVertical : 10}}>
                    <View style={{height : 50, borderRadius : 5,  width : 50, backgroundColor : '#00cc00'}}>

                    </View>
                    <Text style={{color : 'white', fontSize : 10, marginTop : 3}}>
                        Tambah
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePrees('Add')} style={{flex : 1, alignItems : 'center', justifyContent : 'center', paddingVertical : 10}}>
                    <View style={{height : 50, borderRadius : 5,  width : 50, backgroundColor : '#00cc00'}}>

                    </View>
                    <Text style={{color : 'white', fontSize : 10, marginTop : 3}}>
                        Kurang
                    </Text>
                </TouchableOpacity>


                
            </View>
            <KontenHarga />

            <View style={{height : 50,  flexDirection : 'row'}}>
                <TouchableOpacity style={{flex : 1, backgroundColor : '#0080ff',  justifyContent : 'center', alignItems : 'center'}}>
                    
                    <Text style={{color : 'white'}}>
                        Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flex : 1, backgroundColor : '#0080ff',  justifyContent : 'center', alignItems : 'center'}}>
                
                    <Text style={{color : 'white'}}>
                        Table
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;
