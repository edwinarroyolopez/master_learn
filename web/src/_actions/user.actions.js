import { userService } from '../_services';
import { history } from '../_helpers';

export const userActions = {
  getAll,
  login
};

function login (args){
  return dispatch => {
    userService.login(args).then(
      data => {
          console.log('user.actions => data: ',data);
          let { Login } = data.data;
          dispatch(success(Login));
          history.push('/');
      },
      error => {
        console.log(error);
      }
    );

  }

  function success(user){ return { type:'LOGIN_SUCCESS', user }}
}
function getAll ( obj ) {
  return dispatch => {
    userService.getAll().then(
      data => {
        let  { users }  = data.data;
        console.log('user.actions => users: ',users);
        dispatch(success(users));
      },
      error => {
        console.log(error);
      }
    )
  }

  function success(users) { return { type: 'LOAD_USERS', users } }
}
