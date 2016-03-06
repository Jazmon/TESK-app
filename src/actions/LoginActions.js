import Dispatcher from '../Dispatcher';
import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants';

export default {
  loginUser: (jwt) => {
    RouterContainer.get().transitionTo('/');

    localStorage.setItem('jwt', jwt);

    Dispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt
    });
  }
};
