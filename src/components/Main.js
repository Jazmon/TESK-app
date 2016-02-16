import 'materialize-css/sass/materialize.scss';
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

import { Button } from 'react-materialize';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <img src={yeomanImage} alt='Yeoman Generator' />
        <Button>Hello World!</Button>
        <div className='notice'>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
