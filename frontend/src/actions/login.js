import * as api from '../api/index.js'
import { LOGIN, LOGOUT } from '../constants/actionTypes'

export const login = (inputs) => async (dispatch) => {
    try{
        const { data } = await api.login(inputs);
        dispatch({ type: LOGIN, data });
    }
    catch(error){
        console.log(error);
        return(error);
    }
}

export const signup = (inputs, navigate) => async (dispatch) => {
    try{
        const { data } = await api.signin(inputs);
        navigate("/auth")
    }
    catch (error){
        console.log(error);
    }
}

export const sendemail = (inputs) => async (dispatch) => {
    try{
        const { data } = await api.sendemail(inputs);
    }
    catch(error){
        console.log(error);
    }
}

export const logout = (token) => async(dispatch) => {
    try{
        const res = await api.logout(token);
        dispatch({type: LOGOUT});

        return;
    }
    catch (error){
        console.log(error);
    }
}

export const googlelogin = (code) => async(dispatch) => {
    try{
        console.log(code);
        const { data } = await api.googlelogin(code);
        dispatch({type: LOGIN, data})
    }
    catch(error){
        console.log(error);
    }
}