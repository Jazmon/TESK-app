import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

// const menuItems = [
//   {route: '/', text: 'Home'},
//   {route: '/tournaments', text: 'Tournaments'},
//   {route: '/userInfo', text: 'User Info'},
// ];

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    console.log('props', props);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleChange = () => {

  };

  render() {
    const {location, children} = this.props;
    console.log('location', location);

    return (
      <div>
        <AppBar
          title='TESK'>
        </AppBar>
        <Tabs>
          <Tab label='Jäsenyys' route='/' onTouchTap={this.handleChange}>{this.props.children}</Tab>
          <Tab label='Tapahtumat'route='/login' onTouchTap={this.handleChange}>{this.props.children}</Tab>
          <Tab label='Tiedotteet' route='/membercard' onTouchTap={this.handleChange}>{this.props.children}</Tab>
        </Tabs>
        <LeftNav
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} className='navlink'>
            <IndexLink to='/'>Main</IndexLink>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose} className='navlink'>
            <Link to='login'>Login</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose} className='navlink'>
            <Link to='membercard'>Member Card</Link>
          </MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default Nav;
