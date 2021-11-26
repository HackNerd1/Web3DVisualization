import Axios from 'axios';
import { baseUrl, timeOut } from 'src/config/index';

Axios.defaults.baseURL = baseUrl;
Axios.defaults.timeout = timeOut;

Axios.interceptors.request.use((config) => {});

export default Axios;
