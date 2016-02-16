import 'materialize-css/sass/materialize.scss';
require('styles/App.scss');

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import Test from './pages/Test';
import Login from './pages/Login';


import { Button } from 'react-materialize';

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Test}></IndexRoute>
          <Route path='login' name='login' component={Login}></Route>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
