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
          pattern="^#([A-Fa-f0-9]{6})$"
          required
          value={hex}
          id={name}
        />
        <label htmlFor={name} className="variable__name">
          {name}
        </label>
        <p className="variable__hex">{hex}</p>
      </li>
    );
  }
}
