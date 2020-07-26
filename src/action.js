// import axios from 'axios';

/* это наши actionCreators */
const actionLogin = (email, password) => ({
  type: 'LOGIN',
  profile: { email, password },
});

export default actionLogin;
