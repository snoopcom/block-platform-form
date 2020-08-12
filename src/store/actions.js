// export const logInAction = (email) => ({
//   type: 'LOGIN',
//   payload: { email },
// });

import { createAction } from 'redux-actions';
import { userRequest, loginRequest } from '../api/Index';

export const setUserRequest = createAction('STATUS_USER_REQUEST');
export const setUserSuccess = createAction('STATUS_USER_SUCCESS');
export const setUserFailure = createAction('STATUS_USER_FAILURE');

export const setLoginRequest = createAction('STATUS_SIGNUP_REQUEST');
export const setLoginSuccess = createAction('STATUS_SIGNUP_SUCCESS');
export const setLoginFailure = createAction('STATUS_SIGNUP_FAILURE');

/* выйти из профиля */
export const logOutAction = () => ({ type: 'LOGOUT' });

export const getUser = () => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const response = await userRequest();
    dispatch(setUserSuccess(response.data));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response;
  } catch (error) {
    dispatch(setUserFailure());
    throw error;
  }
};

export const authorization = (values) => async (dispatch) => {
  // dispatch(setLoginRequestt());
  try {
    const response = await loginRequest(values);
    dispatch(setLoginSuccess(response.data));
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response;
  } catch (error) {
    dispatch(setLoginFailure());
    throw error;
  }
};

// export const logInAction = (email) => ({
//   type: 'LOGIN',
//   payload: { email },
// });
