import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Add = () => {
    const [count, setCount] = useState(0);
    const onPress = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <View style={{flex : 1}}>
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <View style= {{}}>
                    <Text>
                        Nama Barang :  
                    </Text>
                    <TextInput placeholder= "Nama Barang"/>
                </View>

                <View>
                    <Text>
                        Stok Barang : {count}
                    </Text>
                    <TextInput placeholder= "Stok Barang" value={count}/>
                </View>
                
                
                <View>
                    <Text>
                        Harga Barang :
                    </Text>

                    <TextInput placeholder= "Harga Barang"/>
                </View>

                <TouchableOpacity onPress= {onPress}>
                    <Text>
                        TAMBAH BARANG
                    </Text>    
                </TouchableOpacity>                                

            </View>
        </View>
    )
}

export default Add;
