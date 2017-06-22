import React, { Component } from 'react';

export default class Filter extends Component {
  onChange = () => {
    const newState = 'TJ';
    this.props.callbackParent(newState);
  };
  render() {
    const { name, hex } = this.props;
    return <input onChange={() => this.onChange()} type="text" />;
  }
}
