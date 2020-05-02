import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import KontenHarga from '../../../components/atom/harga';

const Home = ({navigation}) => {

    const handlePrees = (halaman) => {
        navigation.navigate(halaman)
    }


    return (
        <View style={{ paddingTop : 10, flex : 1, backgroundColor : 'green'}}>
            <View style={{flex : 0.05, marginHorizontal : 20, backgroundColor : 'white', opacity : 0.5, paddingHorizontal : 10, paddingVertical : 10, borderRadius :5}}>
                <TextTicker
                    style={{ fontSize: 15, color : 'white' }}
                    duration={10000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                    >
                    Super long piece of text is long. The quick brown fox jumps over the lazy dog.
                </TextTicker>    
            </View>
            <View style={{ marginHorizontal : 20, flex : 0.2, backgroundColor : 'blue', marginTop : 10, flexDirection : 'row', borderRadius : 5}}>

                <TouchableOpacity onPress={() => handlePrees('Add')} style={{flex : 1, alignItems : 'center', justifyContent : 'center', paddingVertical : 10}}>
                    <View style={{height : 50, borderRadius : 5,  width : 50, backgroundColor : 'green'}}>

                    </View>
                    <Text style={{color : 'white', fontSize : 10, marginTop : 3}}>
                        Tambah
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePrees('Add')} style={{flex : 1, alignItems : 'center', justifyContent : 'center', paddingVertical : 10}}>
                    <View style={{height : 50, borderRadius : 5,  width : 50, backgroundColor : 'green'}}>

                    </View>
                    <Text style={{color : 'white', fontSize : 10, marginTop : 3}}>
                        Kurang
                    </Text>
                </TouchableOpacity>


                
            </View>
            <KontenHarga />

            <View style={{height : 50, backgroundColor : 'blue', flexDirection : 'row'}}>
                <View style={{flex : 1, backgroundColor:'orange', justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        Profile
                    </Text>
                </View>
                <View style={{flex : 1, backgroundColor:'yellow', justifyContent : 'center', alignItems : 'center'}}>
                    <Text>

                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Home;
