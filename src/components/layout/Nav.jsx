import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

const menuItems = [
  { route: '/', text: 'Home'},
  { route: '/tournaments', text: 'Tournaments'},
  { route: '/userInfo', text: 'User Info'},
]

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  // handleToggle() {
  //   this.setState({open: !this.state.open});
  // }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  openSideMenu() {
    alert('open');
  }

  render() {
    const {location} = this.props;

    return (
      <div>
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
          menuItems={menuItems}
        >
          <MenuItem>Menu item</MenuItem>
          <MenuItem>ASD</MenuItem>
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
