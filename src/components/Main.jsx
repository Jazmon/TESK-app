require('styles/App.scss');

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import Test from './pages/Test';
import Login from './pages/Login';
import Tournament from './pages/Tournament';
import MemberCard from './pages/MemberCard';

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Test}></IndexRoute>
          <Route path='login' name='login' component={Login}></Route>
          <Route path='membercard' name='membercard'
            component={MemberCard}></Route>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
