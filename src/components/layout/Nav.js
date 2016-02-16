import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }
  // handleToggle = () => this.setState({open: !this.state.open});

  openSideMenu() {
    alert('open');
  }

  render() {
    const {location} = this.props;

    return (
      <AppBar
        title='Title'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        onLeftIconButtonTouchTap={this.openSideMenu}>
      </AppBar>
    );
  }
}
