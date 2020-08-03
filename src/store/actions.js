export const logInAction = (email, password) => ({
  type: 'LOGIN',
  profile: { email, password },
});

/* выйти из профиля */
export const logOutAction = () => ({ type: 'LOGOUT' });
