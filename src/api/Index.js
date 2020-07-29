import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

/* export const signUpAction = ({ username, email, password }) => (
  { type: 'SIGNUP', profile: { username, email, password } }
); */

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
// export const login = async ({ email, password }) => {
//   const response = await axios.post('/login', {
//     user : {
//       email,
//       password,
//     }
//   });
//   return response;
// };

export const login = ({ email, password }) => axios.post('/users/login', {
  user: {
    email,
    password,
  },
});
