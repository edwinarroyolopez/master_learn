export function alert (state ={}, action ) {
  console.log('alert.reducer => action: ',action);
  switch (action.type) {
    case 'CLEAR':
      return {};
    default:
      return state;
  }
}
