import React, { PureComponent } from 'react';

export default class Variable extends PureComponent {
  handleChange = (evt, name) => {
    this.props.updateColor(name, evt.target.value);
  };

  render() {
    const { name, hex } = this.props;
    return (
      <li className="variable">
        <input
          className="variable__input"
          onChange={evt => this.handleChange(evt, name)}
          type="color"
          value={hex}
        />
        <p className="variable__name">{name}</p>
        <p className="variable__hex">{hex}</p>
      </li>
    );
  }
}
