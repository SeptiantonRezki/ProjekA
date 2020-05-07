import {combineReducers} from 'redux';


const initialStateRegister = {
    user_firebase : {},
    login : false,
    nama : 'SeptiantonRezki'
}

const reducerRegister = (state = initialStateRegister , action) => {
    // ini untuk percobaan Test
    if(action.type === "LOGIN"){
        return {
            ...state,
            [action.input_nama] : action.value_nama
        }
    }

    if(action.type === "CHANGE_USER") {
        return {
            ...state,
            user_firebase : action.value
        }
    }

    if(action.type === "CHANGE_LOGIN") {
        return {
            ...state,
            login : action.value
        }
    }

    if(action.type === "USER_REGISTER"){
        return {
            ...state,
            [action.input_nama] : action.value_nama
        }
        
    }
    return state;
}


const initialStateLogin = {
    notif : "password anda salah",
    kondisi : "okkkkkkk"
}
const reducerLogin = (state = initialStateLogin, action) => {
    return state;
}

const reducer = combineReducers({
    reducerRegister,
    reducerLogin,
})

export default reducer;