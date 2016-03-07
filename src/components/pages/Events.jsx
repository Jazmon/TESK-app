import React from 'react';

class Events extends React.Component {
  render() {
    const date = (new Date()).toLocaleDateString('fi-FI');

    return (
      <div className='container'>
        <h4>Tapahtumat</h4>
      </div>
    );
  }
}

export default Events;
