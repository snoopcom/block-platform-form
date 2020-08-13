const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { ...state };
    default:
      return state;
  }
};

export default reducer;

// import { combineReducers } from 'redux';
// import { handleAction } from 'redux-actions';
// import * as actions from './actions';

// const defaultState = {
//   user: '',
// };
// const reducer = handleAction(
//   {
//     [actions.logInAction]: (state, action) => action.payload,
//   },
//   defaultState,
// );

// export default combineReducers({
//   reducer,
// });
