import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import ActionAndroid from 'material-ui/lib/svg-icons/action/android';

export default class Tournament extends React.Component {
  render() {
    const {location} = this.props;

    return (
      <div>
        <h4>Tournament</h4>
        <div>
          <RaisedButton
            label='HearthstoneTournament'
            linkButton={true}
            href=''
            secondary={true}
            style={styles.button}
            icon={<FontIcon className='muidocs-icon-custom-github'/>}
          />
        </div>
      </div>

    );
  }
}
