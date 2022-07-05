import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const login = (inputs) => API.post('/auth/login', inputs);
export const signin = (inputs) => API.post('/auth/register', inputs);
export const logout = (token) => API.post('/auth/logout', null);

//Load Room
export const loadMessage = (room) => API.get('/chat/load', );