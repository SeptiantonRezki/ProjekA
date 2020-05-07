import auth from '@react-native-firebase/auth';




export const functionA = (input_nama, value_nama) => {
    return {type : "LOGIN", value_nama : value_nama, input_nama : input_nama};
}

export const registerUserAPI = ({email, password}) => (dispatch) => {
    return new Promise((resolve, reject) => {
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                alert("masuk");

                console.log(res.user);
                resolve(true);
            })
            .catch(function(error) { 
                var errorCode = error.code;
                console.log(errorCode);
                reject(false);
            })
    })
}