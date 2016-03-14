import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Auth from '../../services/AuthService';
import linkState from 'react-link-state';
import Auth0Lock from 'auth0-js';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  login = (e) => {
    e.preventDefault();

    Auth.login(this.state.user, this.state.password)
      .catch((err) => console.error('Error logging in', err));
  };

  componentWillMount() {
    this.lock = new Auth0Lock('');
  }

  // handleUserChange = (user) => this.setState({user});
  //
  // handlePasswordChange = (password) => this.setState({password});
  //
  // userValueLink = (value) => {
  //   return {
  //     value: this.state.email,
  //     requestChange: this.handleUserChange
  //   };
  // };
  //
  // passwordValueLink = (value) => {
  //   return {
  //     value: this.state.password,
  //     requestChange: this.handlePasswordChange
  //   };
  // };

  render = () => {
    return (
      <div className='content'>
        <h4>Login</h4>
        <form role='form'>
          <div className='form-group'>
            <TextField
              floatingLabelText='Email'
              type='email'
              valueLink={linkState(this, 'user')}
              ></TextField>
          </div>
          <div className='form-group'>
            <TextField
              floatingLabelText='Password'
              type='password'
              valueLink={linkState(this, 'password')}
              ></TextField>
          </div>
          <RaisedButton
            type='button'
            onTouchTap={this.login.bind(this)}
            label='Login'
            className='loginButton'/>
        </form>
      </div>
    );
  };
}

export default Login;
