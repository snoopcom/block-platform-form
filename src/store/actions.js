// import axios from 'axios';

/* запрос на регистрацию
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
 */

/* запрос на авторизацию
export const login = ({ email, password }) => axios.post('/users/login', {
  user: {
    email,
    password,
  },
});
*/

export const logInAction = (email, password) => ({
  type: 'LOGIN',
  profile: { email, password },
});

/* выйти из профиля */
export const logOutAction = () => ({ type: 'LOGOUT' });
