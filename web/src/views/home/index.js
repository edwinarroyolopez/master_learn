import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class Home extends Component {

  componentDidMount = async  () => {
    console.log(userActions);

    await this.props.dispatch(userActions.getAll({ action: 'loadUsers', param:'' }));
  }

  render(){
    const { user, users } = this.props;

    console.log('home => users: ',users);
    console.log('home => user: ',user);

    return(
      <div className="home">
        <h2>User:</h2>
        {user.name ? <div className="user">{user.name}</div> : <div className="nothing">No user</div>}
        <hr/>
        <h4>Usuarios disponibles</h4>
        <hr/>
        <div className="users">
          {users.map( (user,key) =>
            <div className="user" key={key}>{user.name} pass: {user.pass}</div>

          )}
        </div>
      </div>
  );

    if(this.props.users){
      return this.props.users.map( (user,key) => {
        return ( <div className="user" key={key}>{user.name}</div> )
      })
    }


  }
}
// <User users={this.props.users} />
const User = ({ users }) => {
  return users.map((user,key)=>{
    return(
      <div className="user" key={key} >{user.name}</div>
    );
  });
}

const mapStateToProps = state => ({
  users: state.users,
  user: state.authentication.user
});
export default connect(mapStateToProps)(Home);
