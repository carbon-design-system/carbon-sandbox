import React, { Component } from 'react';
import Sidebar from './../Components/Sidebar';
import Components from './../Components/Components';

export default class App extends Component {
  state = {
    isFiltering: false,
    checkedItems: [],
    isNotSupported: false,
  };

  componentDidMount = () => {
    const isSafari =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    const isNotSupported = isSafari || isIE;

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

  handleSkip = evt => {
    if (evt.which === 13) {
      document.activeElement.blur();
      document.querySelector('#theme-switcher').focus();
    }
  };

  render() {
    const { isFiltering, checkedItems, isNotSupported } = this.state;
    return (
      <div className="container">
        <a
          className="skip-to-content"
          onKeyPress={this.handleSkip}
          tabIndex={0}
          role="button">
          Skip to main content
        </a>
        {isNotSupported ? (
          <div className="banner">
            <p>
              <span>Attention: </span>
              For the best experience, please view this site using Google Chrome
              or Mozilla Firefox
            </p>
          </div>
        ) : null}
        <Components checkedItems={checkedItems} isFiltering={isFiltering} />
      </div>
    );
  }
}
