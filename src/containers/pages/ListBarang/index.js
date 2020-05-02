import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


const ListBarang = ({navigation}) => {


    return (
        <ScrollView>
        <View style= {{flexDirection : 'row', flexWrap : 'wrap',  paddingHorizontal : 5, backgroundColor: '#E0E0E0', justifyContent : 'center'}}>
            
            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: 'blue', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View> 

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: 'blue', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View> 

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: 'blue', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>

            <View style={{width : '45%',  borderRadius : 5, marginHorizontal: 5, marginVertical : 10, backgroundColor:'white' }}>
                <View style={{width: '100%', backgroundColor: 'blue', borderTopLeftRadius : 5, borderTopRightRadius : 5, height : 150, justifyContent : 'center', alignItems : 'center'}}>
                    <Text>
                        ini adalah gambar
                    </Text>
                </View>
                <View style={{paddingHorizontal : 5, borderBottomLeftRadius : 5, borderBottomRightRadius : 5}}>
                    <Text style={{fontSize : 20, marginVertical : 5}}>Nama</Text>
                    <Text style={{marginBottom : 5}}>Rp 10.000.000</Text>
                </View>
            </View>
             

        </View>
        </ScrollView>
    )
}

export default ListBarang;

const styles = StyleSheet.create({
    
    
});