import React, { Component, PropTypes } from 'react';
import Sidebar from './../Components/Sidebar';
import Components from './../Components/Components';
// import { Icon } from '@console/bluemix-components-react';

export default class App extends Component {
  state = {
    isFiltering: false,
    checkedItems: [],
    isNotSupported: false,
  };

  componentDidMount = () => {
    const isNotSupported =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);

    this.setState({
      isNotSupported,
    });
  };

  onChildChanged = newState => {
    this.setState({
      checkedItems: newState,
      isFiltering: newState.length > 0,
    });
  };

  render() {
    const { isFiltering, checkedItems, isNotSupported } = this.state;
    return (
      <div className="container">
        <Components checkedItems={checkedItems} isFiltering={isFiltering} />
        <Sidebar
          isNotSupported={isNotSupported}
          callbackParent={newState => this.onChildChanged(newState)}
          isFiltering={isFiltering}
        />
      </div>
    );
  }
}
