import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';

class Tournament extends React.Component {
  render() {

    return (
      <div className='container'>
        <h4>Tournament</h4>
        <RaisedButton
          label='Hearthstone tournament'
          linkButton={true}
          href=''
          secondary={true}
        />
      </div>

    );
  }
}

export default Tournament;
