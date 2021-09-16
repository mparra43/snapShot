import { types } from '../types/types';




export const startLogin = ( email, password ) => {



}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {
    }

}

export const startChecking = () => {
    return async(dispatch) => {

    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })