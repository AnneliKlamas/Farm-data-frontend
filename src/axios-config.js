import axios from 'axios';

export const Backend = axios.create({
    baseURL: `https://farm-data-backend.herokuapp.com`,
})