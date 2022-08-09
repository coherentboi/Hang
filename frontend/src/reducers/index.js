import { combineReducers } from 'redux';

import login from './login';
import dms from './dms';
import groups from './groups';
import friends from './friends';
import websocket from './websocket';

export const reducers = combineReducers({
    login,
    dms,
    groups,
    friends,
    websocket,
});