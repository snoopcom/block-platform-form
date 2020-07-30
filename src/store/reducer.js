const initState = {
  login: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.profile, login: true };
    case 'SIGNUP':
      return { ...state, ...action.profile };
    case 'LOGOUT':
      return { ...state, login: false };
    default:
      return state;
  }
};

export default reducer;
