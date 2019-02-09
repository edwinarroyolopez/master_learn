import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../_actions';
import '../../utils/styles/login.css';
/* components */
import Button from '../../components/Button';
import Input from '../../components/TextInput';

class Login extends Component {
  constructor (props) {
    super(props);
    // reset login status
//    this.props.dispatch(userActions.logout());
  /* Se usa para hacer validaciones
    this.state = {
        username: '',
        password: '',
        submitted: false
    };
  */
   localStorage.removeItem('user');
  }
  state = { argsLogin: {} }
  handleChange = (e, name) => {
    const argsLogin = this.state.argsLogin;
    argsLogin[name] = e.target.value;
    this.setState({ argsLogin });
  }
  handleLogin = async () => {
    const argsLogin = this.state.argsLogin;
    await this.props.dispatch(userActions.login(argsLogin));
  }
  render(){
    return(
      <div className="login">
        <Input
          name="username"
          label="User"
          handleChange={this.handleChange}
          /><br/>
        <Input
          name="pass"
          label="Password"
          handleChange={this.handleChange}
          /><br/>
        <div className="content_button">
          <Link to={`/register`}><Button text="Crear cuenta" /></Link>
          <Button text="Iniciar sesión" onClick={this.handleLogin} />
        </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
  const { users } = state;
  return { users };
}

export default connect(mapStateToProps)(Login);
