import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

/* export const signUpAction = ({ username, email, password }) => (
  { type: 'SIGNUP', profile: { username, email, password } }
);

export const signUp = async ({ username, email, password }) => {
  /*try {
    const response = await axios.post('/users', {
      user: {
        username,
        email,
        password,
      },
    });
  } catch (error) {
   // alert('Такой пользователь существует');
  }
};

export const login = async ({ email, password }) => {
  /*const response = await axios.post('/login', {
    user : {
      email,
      password,
    }
  });
};
*/
