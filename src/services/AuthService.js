import request from 'reqwest';
import when from 'when';
import { API_ENDPOINT } from '../../config';
import LoginActions from '../actions/LoginActions';

class AuthService {
  login = (username, password) => {
    return when(request({
      url: `${API_ENDPOINT}/jwt-auth/v1/`,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    }))
    .then((response) => {
      // we get a jwt back
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      let jwt = response.id_token;
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      LoginActions.loginUser(jwt);
      return true;
    });
  };
}

export default new AuthService();
