import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

const getAccessToken = () => {
    return localStorage.getItem('access_token');
}

const headers = {
    'Authorization' : `Bearer${getAccessToken()}`,
    'Accept' : 'applicatipn/json',
    'Content-Type' : 'applicatipn/json'
}

var axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: headers
});

export const login = data => {
    return axiosInstance.post(`${apiUrl}login`, data);
}

export const logout = data => {
    return axiosInstance.post(`${apiUrl}logout`, data);
}

export const register = data => {
    return axiosInstance.post(`${apiUrl}register`, data);
}

export const get = endpoint => {
    return axiosInstance.get(`${apiUrl}${endpoint}`);
}

export const post = (endpoint, data) => {
    return axiosInstance.post(`${apiUrl}${endpoint}`, data);
}

