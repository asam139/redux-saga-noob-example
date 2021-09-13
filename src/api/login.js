import { axiosClient } from './axiosClient';

export const login = ({ email, password }) => axiosClient.post('/login', { email, password });
