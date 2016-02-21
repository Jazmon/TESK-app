import React from 'react';

export default class Test extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div className='content'>
        <h4>Test</h4>
      </div>
    );
  }
}
