import React, { Component, PropTypes } from 'react';
import Sidebar from './../Components/Sidebar';
import Components from './../Components/Components';
// import { Icon } from '@console/bluemix-components-react';

export default class App extends Component {
  onChildChanged = newState => {
    console.log(newState);
  };

  render() {
    return (
      <div className="container">
        <Components />
        <Sidebar callbackParent={newState => this.onChildChanged(newState)} />
      </div>
    );
  }
}
