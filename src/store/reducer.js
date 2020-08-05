const initState = {
  login: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload, login: true };
    case 'LOGOUT':
      return { ...state, login: false };
    default:
      return state;
  }
};

export default reducer;
