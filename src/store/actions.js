export const logInAction = (email, password) => ({
  type: 'LOGIN',
  payload: { email, password },
});

/* выйти из профиля */
export const logOutAction = () => ({ type: 'LOGOUT' });
