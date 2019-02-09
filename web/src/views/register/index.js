import React, { Component } from 'react';
import { connect } from 'redux';
import '../../utils/styles/register.css'
/*  */
import Button from '../../components/Button';
import Input from '../../components/TextInput';


class Register extends Component {
  state = {
    argsRegister: {}
  }
  handleChange = (e, name) => {
    const argsRegister = this.state.argsRegister;
    argsRegister[name] = e.target.value;
    this.setState({ argsRegister });
  }
  handleRegister = async () => {
    let argsRegister = this.state.argsRegister;

  }
  render(){
    return(
      <div className="register">
        <Input
          name="name"
          label="Nombre Completo"
          handleChange={this.handleChange}
        /><br/>
        <Input
          name="username"
          label="Usuario"
          handleChange={this.handleChange}
        /><br/>
        <Input
          name="pass"
          label="Nueva Contraseña"
          handleChange={this.handleChange}
        /><br/>
        <Input
          name="email"
          label="Email"
          handleChange={this.handleChange}
        /><br/>
        <div className="content_button">
          <Button text="Crear cuenta" handleClick={this.handleRegister} />
        </div>
      </div>
    );
  }
}

export default Register;
