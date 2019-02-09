import axios from 'axios';

const API_ENDPOINT = 'http://localhost:7000/graphql';
const LOGIN_USER = `
  mutation Login($username: String!, $pass: String!) {
		Login:Login(username: $username, pass:$pass){
      name
    	username
      pass
      email
    }
  }
`;;
const ALL_USERS = `
  query users {
    users: allUsers{
      name
      username
      pass
      email
    }
  }
`;

export const userService = {
  getAll,
  login
}

async function login(args){
  console.log('user.services => Login: ', args);
  try {
    const { data } = await axios({
      url: `${API_ENDPOINT}`,
      method: 'post',
      data: {
        query: LOGIN_USER,
        variables: args
      }
    });
    console.log('user.services => data: ',data);
      let { Login } = data.data;
    localStorage.setItem('user', JSON.stringify(Login));
  //  localStorage.removeItem('user');
    return data;
  } catch (e) {
    throw e
  }
}
async function getAll () {
  try {
    const { data } = await  axios({
       url: `${API_ENDPOINT}`,
       method: 'post',
       data: {
         query: ALL_USERS
       }
    });
     console.log('users.services => data: ',data);
    return data;
  } catch (e) {
    throw e
  }
}
