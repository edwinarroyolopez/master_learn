let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {}

export function authentication ( state = initialState, action) {
  console.log('authentication.reducer => action: ',action);

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      };
    case 'LOGIN_SUCCESS':
    console.log('authentication.reducer => LOGIN_SUCCESS: ', action);
    console.log('authentication.reducer => LOGIN_SUCCESS: state ', state);
      return {
        loggedIn: true,
        user: action.user
      };
    case 'LOGIN_FAILURE':
      return{};
    case 'LOGOUT':
      return{};
    default:
      return state;
  }
}
