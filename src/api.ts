import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.coindesk.com',
});

export const fetchPrices = async () => {
    const response = await api.get('/v1/bpi/currentprice.json');
    return response.data;
};
