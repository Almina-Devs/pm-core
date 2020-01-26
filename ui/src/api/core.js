import axios from 'axios';

const apiUrl = 'http://localhost:8000/api/';

export function getHi() {
    return axios.get(apiUrl);
}

export function get(endpoint) {
    return axios.get(`${apiUrl}${endpoint}`);
}

export function post(endpoint, data) {
    return axios.post(`${apiUrl}${endpoint}`, data);
}