import axios from 'axios';
// import routes from '../routes';

export const baseUrl = 'https://conduit.productionready.io/api/';

export const api = axios.create();

api.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    const userConfig = req;
    userConfig.headers.Authorization = `Token ${token}`;
    return userConfig;
  }
  return req;
});

export const userRequest = () => {
  const url = `${baseUrl}user`;
  const response = api.get(url);
  return response;
};

export const loginRequest = (values) => {
  const { email, password } = values;
  const autData = {
    user: {
      email,
      password,
    },
  };

  const url = `${baseUrl}users/login`;
  const response = axios.post(url, autData);
  return response;
};

export const registration = async (user) => {
  const response = await api.post('/users', { user });
  return response.data.user;
};

// export const login = async (user) => {
//   const response = await api.post('/users/login', { user });
//   const { data } = response;
//   localStorage.setItem('token', data.user.token);
//   return response.data.user;
// };

// export const access = async () => {
//   axios.interceptors.request.use((req) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const userConfig = req;
//       userConfig.headers.Authorization = `Token ${token}`;
//       return userConfig;
//     }
//     return req;
//   });
// };
// export const access = async () => {
//   const { token } = localStorage;
//   if (!token) {
//     return;
//   }
//   try {
//     axios.interceptors.request.use((req) => {
//       req.headers.Authorization = `Token ${token}`;
//       return req;
//     });
//     const url = routes.getProfileUrl();
//     const response = await axios.get(url);
//     const { data } = response;
//     login(data.user);
//     // console.log(data.user);
//   } catch (error) {
//     // if (error.response.status === 401) {
//     //   localStorage.removeItem('token');
//     // }
//   }
// };
