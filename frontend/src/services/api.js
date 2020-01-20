import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2828',
})

export default api;