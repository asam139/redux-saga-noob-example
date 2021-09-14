import { axiosClient } from './axiosClient';

export const users = ({ page = 1, perPage = 30 } = {}) => axiosClient.get(`/users?page=${page}&per_page=${perPage}`);
