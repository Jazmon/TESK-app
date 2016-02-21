import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Login extends React.Component {
  render() {

    return (
      <div className='content'>
        <h4>Login</h4>
        <form>
          <TextField
            floatingLabelText='Email'
            type='email'></TextField>
          <TextField
            floatingLabelText='Password'
            type='password'></TextField>
          <RaisedButton label='Login' className='loginButton' />
        </form>
      </div>
    );
  }
}

export default Login;
