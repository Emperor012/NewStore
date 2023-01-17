import axiosClient from './axiosClient';

export const getProducts = () => {
  return axiosClient.get('/products');
};
