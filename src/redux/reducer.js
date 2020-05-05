import {combineReducers} from 'redux';

const initialStateRegister = {
    nama : 'SeptiantonRezki'
}
const reducerRegister = (state = initialStateRegister , action) => {
    if(action.type === "LOGIN"){
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