
import axios from 'axios';

const API = axios.create({
    baseURL: '/api', // Replace with your backend URL
    headers: { 'Content-Type': 'application/json' },
});

// Add the request interceptor
API.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
