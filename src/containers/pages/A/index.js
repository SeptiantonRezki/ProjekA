import React, { Fragment, useEffect, useState } from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';

// const A = ({navigation}) => {


//     const globalState = useSelector(state => state);
//     const handlePress = (halaman) => {
//         navigation.navigate(halaman);
//     }
//     const [from, setFrom] = useState({
//         fullname : '',
//     })

//     const onInputData = (value, input) => {
//         alert(value);
//         setFrom({
//             [input]: value,
//         });
//     }

//     useEffect(()=> {
//         alert('ok')
        
//     },[])

//     return (
//         <View style={{flex : 1, alignItems : 'center', justifyContent :'center', marginHorizontal : 20,}}>
            
//             <Text>{globalState.nama} nama</Text>

//             <TextInput
//                 placeholder = "Nama"
//                 value = {from.fullname}
//                 onChangeText = {value => onInputData(value, 'fullName')}
//             />
//             <Text>{from.fullname} disini</Text>
//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Login')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Login</Text>
//             </TouchableOpacity>
            
//             {/* <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Register')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Register</Text>
//             </TouchableOpacity> */}

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('List Barang')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman List Barang</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Tambah Produk')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Tambah Produk</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Ubah Produk')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Ubah Produk</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('List Bulanan')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Detail Bulanan</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('List Tanggalan')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Detail Tanggal</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('List Harian')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Detail Hari</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('Home')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman Home</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{width : '100%', backgroundColor : 'orange', marginVertical :10, paddingVertical : 10, borderRadius : 10}} onPress={() => handlePress('About')}>
//                 <Text style ={{textAlign : 'center'}}>Halaman About</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
const A = () => {
    const globalState = useSelector(state => state);


    const [input, setInput] = useState({
        nama : '',
    })
    function onChangeInput(namaInput, value){
        setInput({
            ...input,
            [namaInput] : value
        })
        console.log('a');
        alert('a')
    }
    function cetak(){
        alert("aaaa");
    }
    return (
        <Fragment>
        <View>
            {console.log(globalState)}
            <TextInput onChangeText={value => onChangeInput('nama', value )}/>
            <Text>{input.nama}</Text><Text>harusnya disitu</Text>
            <TouchableOpacity onPress={() => console.log("kirim data")}>
                <Text>ini data</Text>
            </TouchableOpacity>
        </View>
        </Fragment>
    )
}
export default A;
