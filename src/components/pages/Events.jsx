import React from 'react';
import Event from './eventcomponents/Event.jsx';

class Events extends React.Component {
  render() {
    return (
      <div className='container'>
        <h4>Tapahtumat</h4>
        <Event />
        <Event />
        <Event />
      </div>
    );
  }
}

export default Events;
