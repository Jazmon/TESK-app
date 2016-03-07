import request from 'reqwest';
import when from 'when';
import LoginConstants from '../constants/LoginConstants';
// import { LOGIN_URL, SIGNUP_URL } from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {
  login = (username, password) => this.handleAuth(when(request({
    url: LoginConstants.LOGIN_URL,
    method: 'POST',
    crossOrigin: true,
    type: 'json',
    data: {
      username, password
    }
  })));

  logout = () => LoginActions.logoutUser();

  signup = (username, password, extra) => this.handleAuth(when(request({
    url: LoginConstants.SIGNUP_URL,
    method: 'POST',
    crossOrigin: true,
    type: 'json',
    data: {
      username, password, extra
    }
  })));

  handleAuth = (loginPromise) => loginPromise.then((response) => {
    console.log('LOGIN_URL', LoginConstants.LOGIN_URL);
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    const jwt = response.id_token;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
    LoginActions.loginUser(jwt);
    return true;
  });
}

export default new AuthService();
