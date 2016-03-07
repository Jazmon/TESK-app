import React from 'react';
import Paper from 'material-ui/lib/paper';

class Events extends React.Component {
  render() {
    const style = {
      height: 100,
      width: '90%',
      margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <div className='container'>
        <h4>Tapahtumat</h4>
        <Paper style={style} zDepth={2}>
          <img src='/images/yeoman.png'></img>
        </Paper>
        <Paper style={style} zDepth={2}>
          <img src='/images/yeoman.png'></img>
        </Paper>
        <Paper style={style} zDepth={2}>
          <img src='/images/yeoman.png'></img>
        </Paper>
      </div>
    );
  }
}

export default Events;
