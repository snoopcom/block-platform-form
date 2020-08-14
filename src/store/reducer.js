import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const userReducer = handleActions(
  {
    [actions.logOutAction]: () => {},
    [actions.logAction]: (state, action) => action.payload,
  },
  {},
);

// const username = handleActions(
//   {
//     [actions.setUserSuccess]: (state, { payload: login }) => {
//       return login.user.username;
//     },
//     [actions.setSignUpSuccess]: (state, { payload: login }) => {
//       return login.user.username;
//     },
//     [actions.setLoginSuccess]: (state, { payload: login }) => {
//       return login.user.username;
//     },
//   },
//   '',
// );

// const isAuth = handleActions(
//   {
//     [actions.setLoginSuccess]: () => {
//       return true;
//     },
//     [actions.setSignUpSuccess]: () => {
//       return true;
//     },
//     [actions.setUserSuccess]: () => {
//       return true;
//     },
//     [actions.setLoginFailure]: () => {
//       return false;
//     },
//     [actions.setSignUpFailure]: () => {
//       return false;
//     },
//     [actions.setUserFailure]: () => {
//       return false;
//     },
//   },
//   false,
// );

export default combineReducers({
  userReducer,
  // isAuth,
  // username,
});
