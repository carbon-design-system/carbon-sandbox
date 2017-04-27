import React, { Component } from 'react';
import Sidebar from './../Components/Sidebar';
import Components from './../Components/Components';
// import { Icon } from '@console/bluemix-components-react';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Components />
        <Sidebar />
      </div>
    );
  }
}
