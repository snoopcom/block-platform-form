import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

/*
export const logInAction = (email, password) => {
  return {
    type: 'LOGIN',
    profile: { email, password },
  }
}
*/

/* запрос на регистрацию */
export const signUp = async ({ username, email, password }) => {
  try {
    await axios.post('/users', {
      user: {
        username,
        email,
        password,
      },
    });
  } catch (error) {
    alert('Такой пользователь существует');
  }
};

/* запрос на авторизацию */
export const login = ({ email, password }) => axios.post('/users/login', {
  user: {
    email,
    password,
  },
});
