import Dispatcher from '../Dispatcher';
import { LOGIN_USER, LOGOUT_USER } from '../constants/LoginConstants';
import RouterContainer from '../services/RouterContainer';

export default {
  loginUser: (jwt) => {

    const savedJwt = localStorage.getItem('jwt');

    Dispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt
    });

    if (savedJwt !== jwt) {
      const nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    Dispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
};
