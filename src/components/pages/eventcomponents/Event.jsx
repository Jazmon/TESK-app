import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 100,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Event extends React.Component {

  render() {
    return (
      <div>
        <Paper style={style} zDepth={2}>
          <img src='/images/yeoman.png'></img>
        </Paper>
      </div>
    );
  }
}
