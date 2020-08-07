import axios from 'axios';

// /* запрос на регистрацию */
// export const signUp = async ({ username, email, password }) => {
//   try {
//     const response = await api.post('/users', {
//       user: {
//         username,
//         email,
//         password,
//       },
//     });
//     const { data } = response;
//     localStorage.setItem('token', data.user.token);
//     localStorage.getItem('token');
//     alert('Вы успешно зарегистрированы');
//   } catch (error) {
//     alert('Такой пользователь существует');
//   }
// };

// /* запрос на авторизацию */
// export const login = async ({ email, password }) => {
//   const response = await api.post('/users/login', {
//     user: {
//       email,
//       password,
//     },
//   });
//   const { data } = response;
//   localStorage.setItem('token', data.user.token);
// };

// Перехватываем запрос и перед отправкой добавляем заголовок авторизации, если такой имеется
// api.interceptors.request.use(
//   request => {
//     const { token } = JSON.parse(localStorage.getItem('user')) || {};
//     if (token) {
//       request.headers.Authorization = `Token ${token}`;
//     }
//     return request;
//   },
//   err => Promise.reject(err)
// );

axios.interceptors.request.use(
  (config) => {
    const { token } = localStorage;
    const { headers } = config;
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  },
);

const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

export const login = async (user) => {
  const response = await api.post('/users/login', { user });
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data.user;
};

export const registration = async (user) => {
  const response = await api.post('/users', { user });
  return response.data.user;
};

// export const access = () => {
//   const { token } = localStorage;
//   try {
//     axios.interceptors.request.use((req) => {
//       console.log("test"); // ??
//       req.headers.Authorization = `Token ${token}`;
//       return req;
//     });
//   } catch (error) {

//   }
// };
