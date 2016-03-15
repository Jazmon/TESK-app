import React from 'react';
import Paper from 'material-ui/lib/paper';

import Nav from '../layout/Nav';

export default class Layout extends React.Component {
  render() {
    const {location, children} = this.props;
    // const {children} = this.props;

    return (
      <div className='page'>
        <Nav location={location} children={children}/>
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
