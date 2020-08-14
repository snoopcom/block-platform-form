/* eslint-disable no-useless-catch */
import { createAction } from 'redux-actions';
import { userRequest, loginRequest, signUpRequest } from '../api/Index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload:
// export const setUserRequest = createAction('STATUS_USER_REQUEST');
// export const setUserSuccess = createAction('STATUS_USER_SUCCESS');
// export const setUserFailure = createAction('STATUS_USER_FAILURE');

// export const setLoginRequest = createAction('LOGIN_REQUEST');
// export const setLoginSuccess = createAction('LOGIN_SUCCESS');
// export const setLoginFailure = createAction('LOGIN_FAILURE');

// export const setSignUpRequest = createAction('SIGNUP_REQUEST');
// export const setSignUpSuccess = createAction('SIGNUP_SUCCESS');
// export const setSignUpFailure = createAction('SIGNUP_FAILURE');

export const logAction = createAction('LOGIN');
export const logOutAction = createAction('LOGOUT');

export const getUser = () => async (/* dispatch */) => {
  // dispatch(setUserRequest());
  try {
    const response = await userRequest();
    localStorage.setItem('user', JSON.stringify(response.data.user));
    // dispatch(setUserSuccess(response.data));
    return response;
  } catch (error) {
    // dispatch(setUserFailure());
    throw error;
  }
};

export const authorization = (values) => async (/* dispatch */) => {
  // dispatch(setLoginRequest());
  try {
    const response = await loginRequest(values);
    console.log(response);
    // dispatch(setLoginSuccess(response.data));
    return response;
  } catch (error) {
    // dispatch(setLoginFailure());
    throw error;
  }
};

export const registration = (values) => async (/* dispatch */) => {
  // dispatch(setSignUpRequest());
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await signUpRequest(values);
    // dispatch(setSignUpSuccess(response.data));
    return response;
  } catch (error) {
    // dispatch(setUserFailure());
    throw error;
  }
};
