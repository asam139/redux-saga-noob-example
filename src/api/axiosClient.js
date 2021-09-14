import axios from 'axios';
import { Constants } from '../common/utils/constants';

export const axiosClient = axios.create();
axiosClient.defaults.baseURL = Constants.HOST_URL;
axiosClient.defaults.headers = Constants.headers;
// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;
