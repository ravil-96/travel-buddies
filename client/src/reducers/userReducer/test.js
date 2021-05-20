import userReducer from "./userSlice";

describe("markersReducer", () => {
const initState = { "logged_in": false, "holidays": []}
const loggedInState = {"err": false, "holidays": [], "id": 1, "logged_in": true, "token": "123", "user": "user1"}

  test("it intialises with a users object, logged out false", () => {
    const initReturn = userReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual(initState);
  });

  test("it sets an error on error", () => {
    const testError = userReducer(initState, { type: "SET_ERROR",
    payload: 'uh oh' })
    expect(testError).toEqual({"err": "uh oh", "holidays": [], "logged_in": false});
});

test("it sets an error on error", () => {
    const testError = userReducer(initState, { type: "SET_ERROR",
    payload: 'uh oh' })
    expect(testError).toEqual({"err": "uh oh", "holidays": [], "logged_in": false});
});

test("it updates state on user login", () => {
    const testLogin = userReducer(initState, { type: "USER_LOGIN",
    payload: {msg: 'user1', token: '123', id: 1} })
    expect(testLogin).toEqual(loggedInState);
});

test("it updates user holidays", () => {
    const testLogin = userReducer(loggedInState, { type: "LOAD_HOLIDAYS",
    payload: [1,2,3] })
    expect(testLogin).toEqual({...loggedInState, 'holidays': [1,2,3]});
});

test("it updates user chat", () => {
    const testLogin = userReducer(loggedInState, { type: "ADD_CHAT",
    payload: [1,2,3] })
    expect(testLogin).toEqual({'chat': [1,2,3], ...loggedInState});
});

test("it updates user chat", () => {
    const testLogin = userReducer(loggedInState, { type: "ADD_SOCKET",
    payload: '123' })
    expect(testLogin).toEqual({socket: '123', ...loggedInState});
});




});
