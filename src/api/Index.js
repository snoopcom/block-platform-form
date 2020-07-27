import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api/';

const signUp = async (/* { username, email, password } */) => {
  /* try {
    const response = await axios.post('/users', {
      user: {
        username,
        email,
        password,
      },
    });
    return response;
  } catch (error) {
    alert('Такой пользователь существует');
  } */
};

export default signUp;
