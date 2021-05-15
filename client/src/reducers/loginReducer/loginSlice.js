const loginReducer = (state = { logged_in: false }, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        logged_in: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
