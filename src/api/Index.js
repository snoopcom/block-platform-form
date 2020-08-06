import axios from 'axios';

const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
});

/* запрос на регистрацию */
export const signUp = async ({ username, email, password }) => {
  try {
    const response = await api.post('/users', {
      user: {
        username,
        email,
        password,
      },
    });
    const { data } = response;
    localStorage.setItem('token', data.user.token);
    localStorage.getItem('token');
    alert('Вы успешно зарегистрированы');
  } catch (error) {
    alert('Такой пользователь существует');
  }
};

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

export const login = async (user) => {
  const response = await api.post('/users/login', { user });
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data.user;
};

export const getToken = async () => {
  const { token } = localStorage;
  console.log(token);
};
