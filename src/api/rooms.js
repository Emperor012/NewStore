import axiosClient from './axiosClient';

export const getRooms = () => {
  return axiosClient.get('/rooms');
};
