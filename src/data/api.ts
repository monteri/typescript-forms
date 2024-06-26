import axios from 'axios';

import { UserFormData } from "../types";

const api = axios.create({
  baseURL: 'https://api.coindesk.com',
});

export const fetchPrices = async () => {
  const response = await api.get('/v1/bpi/currentprice.json');
  return response.data;
};

export const addUser = async (userData: UserFormData) : Promise<UserFormData>  => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 2000);
  });
};