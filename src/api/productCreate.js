import axiosClient from './axiosClient';

export const productCreate = () => {
  return axiosClient.get('/product/create');
};
