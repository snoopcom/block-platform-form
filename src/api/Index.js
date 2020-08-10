import axios from 'axios';
import routes from '../routes';

const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

export const registration = async (user) => {
  const response = await api.post('/users', { user });
  return response.data.user;
};

export const login = async (user) => {
  const response = await api.post('/users/login', { user });
  const { data } = response;
  localStorage.setItem('token', data.user.token);
  return response.data.user;
};

export const access = async () => {
  const { token } = localStorage;
  if (!token) {
    return;
  }
  try {
    axios.interceptors.request.use((req) => {
      req.headers.Authorization = `Token ${token}`;
      return req;
    });
    const url = routes.getProfileUrl();
    const response = await axios.get(url);
    const { data } = response;
    login(data.user);
    // console.log(data.user);
  } catch (error) {
    // if (error.response.status === 401) {
    //   localStorage.removeItem('token');
    // }
  }
};
