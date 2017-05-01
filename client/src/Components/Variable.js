import React, { Component } from 'react';

export default class Variable extends Component {
  render() {
    const { name, hex } = this.props;
    return (
      <li className="variable">
        <input className="variable__input" type="color" defaultValue={hex} />
        <p className="variable__name">{name}</p>
        <p className="variable__hex">{hex}</p>
      </li>
    );
  }
}
