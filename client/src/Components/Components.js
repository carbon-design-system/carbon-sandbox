import React, { Component } from 'react';
import * as CarbonComponents from '@console/bluemix-components-react/';

export default class Components extends Component {
  renderComponents() {
    // [...CarbonComponents].forEach(component => {
    //   return component;
    // });
  }
  render() {
    return (
      <div className="components">
        {this.renderComponents()}
      </div>
    );
  }
}
