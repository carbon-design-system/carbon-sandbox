import React, { Component, PropTypes } from 'react';
import Sidebar from './../Components/Sidebar';
import Components from './../Components/Components';
// import { Icon } from '@console/bluemix-components-react';

export default class App extends Component {
  state = {
    isFiltering: false,
    checkedItems: [],
  };
  onChildChanged = newState => {
    this.setState({
      checkedItems: newState,
      isFiltering: newState.length > 0,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <Components
          checkedItems={this.state.checkedItems}
          isFiltering={this.state.isFiltering}
        />
        <Sidebar callbackParent={newState => this.onChildChanged(newState)} />
      </div>
    );
  }
}
