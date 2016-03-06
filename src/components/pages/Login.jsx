import React from 'react';
import ReactMixin from 'react-mixin';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class Login extends React.Component {

  constructor = () => {
    this.state = {
      user: '',
      password: ''
    };
  };

  login = (e) => {
    e.preventDefault();
    console.log('foo');

    // Auth.login(this.state.user, this.state.password)   .catch((err) =>
    // console.log('Error logging in', err));
  };

  render() {
    return (
      <div className='content'>
        <h4>Login</h4>
        <form role='form'>
          <div className='form-group'>
            <TextField
              floatingLabelText='Email'
              type='email'
              value='Foo@bar.com'></TextField>
            <TextField
              floatingLabelText='Password'
              type='password'
              value='foo'></TextField>
          </div>
          <RaisedButton
            type='button'
            onTouchTap={this.login}
            label='Login'
            className='loginButton'/>
        </form>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);

export default Login;
