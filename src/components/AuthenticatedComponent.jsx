import React from 'react';
import LoginStore from '../stores/LoginStore';

export default (ComposedComponent) => {
  return class AuthenticatedComponet extends React.Component {
    static willTransitionTo(transition) {
      // this method is called before transitioning to this component.  If the user is not logged in, we’ll send him or her to the Login page.
      if (!LoginStore.isLoggedIn()) {
        transition.redirect('/login');
      }
    }

    constructor() {
      this.state = this._getLoginState();
    }

    _getLoginState() {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        jwt: LoginStore.jwt
      };
    }

    componentDidMount() {
      LoginStore.addChangeListener(this._onChange.bind(this));
    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      LoginStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          user={this.state.user}
          jwt={this.state.jwt}
          userLoggedIn={this.state.userLoggedIn}
        />
      );
    }
  };
};
