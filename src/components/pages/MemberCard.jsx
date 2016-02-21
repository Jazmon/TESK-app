import React from 'react';
import Paper from 'material-ui/lib/paper';

class MemberCard extends React.Component {
  render() {
    const {location} = this.props;
    const date = (new Date()).toLocaleDateString('fi-FI');

    return (
      <div className='container'>
        <h4>TESK Membership</h4>
        <ul>
          <li>Testerino Userino</li>
          <li>Member since: {date}</li>
          <li>Membership paid: <i className='material-icons'>check</i></li>
        </ul>
      </div>
    );
  }
}

export default MemberCard;
