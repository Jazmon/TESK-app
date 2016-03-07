require('styles/App.scss');

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import Test from './pages/Test';
import Login from './pages/Login';
import MemberCard from './pages/MemberCard';
import Events from './pages/Events';

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Test}></IndexRoute>
          <Route path='login' name='login' component={Login}></Route>
          <Route path='membercard' name='membercard'
            component={MemberCard}></Route>
          <Route path='events' name='events'component={Events}></Route>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
