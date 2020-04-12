import React from 'react';
import Header from './Header';
import Controls from './Controls';
import Keys from './Keys';
import keyMapping from '../helpers/keyMapping';

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Header />
        <Controls />
        <Keys keys={keyMapping} />
      </div>
    );
  }
}