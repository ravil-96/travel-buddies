const loginReducer = (state = { logged_in: false }, action) => {
  switch (action.type) {
    case "SET_ERROR":
        return {
            ...state,
            err: action.payload,
            logged_in: false
        }
    case "USER_LOGIN":
      return {
        ...state,
        err: false,
        logged_in: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
