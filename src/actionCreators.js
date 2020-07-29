export const signUpAction = ({ username, email, password }) => ({
  type: 'SIGNUP',
  profile: { username, email, password },
});

export const logInAction = (email, password) => ({ type: 'LOGIN', profile: { email, password } });
