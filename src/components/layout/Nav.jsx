import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

// const menuItems = [
//   {route: '/', text: 'Home'},
//   {route: '/tournaments', text: 'Tournaments'},
//   {route: '/userInfo', text: 'User Info'},
// ];

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const {location} = this.props;

    return (
      <div>
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>
            <IndexLink to='/'>Main</IndexLink>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='login'>Login</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
            <Link to='tournament'>Tournament</Link>
          </MenuItem>
        </LeftNav>
        <AppBar
          title='Title'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}>
        </AppBar>
      </div>
    );
  }
}
