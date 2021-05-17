const userReducer = (state = { logged_in: false }, action) => {
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
        user: action.payload.msg,
        id: action.payload.id,
        token: action.payload.token
      };
      case "ADD_SOCKET":
        return {
          ...state,
          socket: action.payload
        };
      case "LOAD_HOLIDAYS":
          return {
            ...state,
            holidays: action.payload
         };
    default:
      return state;
  }
};

export default userReducer;
