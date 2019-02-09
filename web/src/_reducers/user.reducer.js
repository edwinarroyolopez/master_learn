const initialState = [];

export function users ( state = initialState, action ) {
  console.log('user.reducer => action: ',action);

  switch (action.type) {
    case 'LOAD_USERS':
        console.log('user.reducer - LOAD_USERS => users: ',action.users);
      return state.concat(action.users);
    default:
      return state;
  }

}
