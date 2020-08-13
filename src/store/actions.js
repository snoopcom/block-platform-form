import { createAction } from 'redux-actions';
import { userRequest, loginRequest /* signUpRequest */ } from '../api/Index';

// Функция createAction принимает тип действия
// (свойство type) и возвращает функцию, принимающую payload:
export const setUserRequest = createAction('STATUS_USER_REQUEST');
export const setUserSuccess = createAction('STATUS_USER_SUCCESS');
export const setUserFailure = createAction('STATUS_USER_FAILURE');

export const setLoginRequest = createAction('LOGIN_REQUEST');
export const setLoginSuccess = createAction('LOGIN_SUCCESS');
export const setLoginFailure = createAction('LOGIN_FAILURE');

export const setSignUpRequest = createAction('SIGNUP_REQUEST');
export const setSignUpSuccess = createAction('SIGNUP_SUCCESS');
export const setSignUpFailure = createAction('SIGNUP_FAILURE');

export const logInAction = createAction('LOGIN');
export const logOutAction = createAction('LOGOUT');

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
  dispatch(setLoginRequest());
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

export const registration = (/* values */) => async (/* dispatch */) => {
  // dispatch(setSignUpRequest());
  // try {
  //   const response = await signUpRequest(values);
  //   // if (response.status === 200) {
  //   //   dispatch(setLoginSuccess(response.data));
  //   // }
  //   return response;
  // } catch (error) {
  //   dispatch(setUserFailure());
  // }
};

// export const logInAction = (email) => ({
//   type: 'LOGIN',
//   payload: {
//     email,
//   },
// });
