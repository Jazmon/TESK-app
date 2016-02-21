import React from 'react';
import Paper from 'material-ui/lib/paper';
import colors from 'material-ui/';
import { Link } from 'react-router';

import Nav from '../layout/Nav';

const style = {
  height: 'auto',
  width: '90%',
  margin: '5%',
  color: 'rgba(0,0,0,0.87)',
  textAlign: 'left',
  display: 'inline-block'
};

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div>
        <Nav location={location} />
        <div className='container'>
          <Paper style={style} zDepth={1}>
            <div>
              {this.props.children}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
