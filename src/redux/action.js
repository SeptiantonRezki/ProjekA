import auth from '@react-native-firebase/auth';




export const functionA = (input_nama, value_nama) => {
    return {type : "LOGIN", value_nama : value_nama, input_nama : input_nama};
}

export const registerUserAPI = ({email, password}) => (dispatch) => {
    return new Promise((resolve, reject) => {
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                alert('User account created & signed in!');
                console.log(res.user);
                resolve(true);
            })
            .catch(function(error) { 
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }
            
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                if (error.code === 'auth/unknown') {
                    alert('Mohon Aktifkan koneksi Anda');
                }
                reject(false);
            })
    })
}

export const loginUserAPI = ({email, password}) => (dispatch) => {
    return new Promise((resolve, reject) => {
        auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const userData = {
                    email : res.user.email,
                    emailVerified : res.user.emailVerified,
                    uid : res.user.uid,
                }
                dispatch({type : 'CHANGE_USER', value : userData})
                alert('berhasil login');
                resolve(userData);
            }).catch(function(error) {
                if (error.code === 'auth/user-not-found') {
                    alert('Anda belum register');
                }
                if (error.code === 'auth/wrong-password') {
                    alert('Password Anda Salah');
                }
                if (error.code === 'auth/unknown') {
                    alert('Mohon Aktifkan koneksi Anda');
                }
                
                reject(false);
            });
    })
}