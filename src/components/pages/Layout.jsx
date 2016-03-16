import React from 'react';
import Paper from 'material-ui/lib/paper';

import Nav from '../layout/Nav';

export default class Layout extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div>
        <Nav location={location} />
        <div className='container'>
          <Paper className='layoutPaper' zDepth={1}>
            <div>
              {this.props.children}
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
