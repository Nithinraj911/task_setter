
import axios from 'axios';


const apiURL = import.meta.env.VITE_APP_SERVER_URL;

const API = axios.create({
    baseURL: apiURL, // Replace with your backend URL
    headers: { 'Content-Type': 'application/json' },
});

// Add the request interceptor
API.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    console.log("ON API"+"_______"+"token :"+token +","+"sessionStorage : "+sessionStorage.getItem('token'));
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
