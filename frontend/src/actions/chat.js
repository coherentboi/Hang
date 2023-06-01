import { w3cwebsocket as W3CWebSocket } from "websocket";
import * as api from '../api/index.js';

import {LOADROOMS, LOADGROUPS, CONNECTWS, BASEWS} from '../constants/actionTypes.js';

export const loadrooms = () => async (dispatch) => {
    try{
        const { data } = await api.loadrooms();

        dispatch({ type: LOADROOMS, payload: data });
    }
    catch(error){
        console.log(error)
    }
}

export const loadgroups = () => async (dispatch) => {
    try{
        const { data } = await api.loadgroups();

        dispatch({ type: LOADGROUPS, payload: data });
    }
    catch(error){
        console.log(error)
    }
}


export const connectws = () => (dispatch) => {
    try{

        let client = JSON.parse(localStorage.getItem('profile')) !== null ? new W3CWebSocket(`${BASEWS}ws/chats/${JSON.parse(localStorage.getItem('profile')).user.username}/`) : null;

        try{
            client.onopen(() => {
                client.send(JSON.stringify({
                    action: "authenticate",
                    content: {
                        token: JSON.parse(localStorage.getItem('profile')).token
                    }
                }));
            })
        }
        catch(error){
            console.log(error);
        }

        client.onclose = (event) => {
            console.log("Client Closed");
        }

        dispatch({ type: CONNECTWS, payload: client});
    }
    catch (error){
        console.log(error);
    }
}

export const createdm = (user) => async(dispatch) => {
    try{
        const { data } = api.createdm(user);
    }
    catch(error){
        console.log(error);
    }
}