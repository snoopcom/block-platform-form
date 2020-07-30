const logInAction = (email, password) => ({
  type: 'LOGIN',
  profile: { email, password },
});

export default logInAction;
