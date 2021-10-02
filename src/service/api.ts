import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_IMOVIEW
});
api.defaults.headers['Chave'] = process.env.API_KEY



export const apiBack = axios.create();

apiBack.defaults.headers['Chave'] = process.env.API_KEY