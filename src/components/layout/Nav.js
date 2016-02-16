import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

import 'materialize-css/sass/materialize.scss';

export default class Nav extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {location} = this.props;
    // const { collapsed } = this.state;

    return (
      <Navbar brand='logo' right>
        <NavItem href='asdf'>ASDF</NavItem>
      </Navbar>
      // <nav className='navbar' role='navigation'>
      //   <p>Navbar</p>
      // </nav>
    );
  }
}
