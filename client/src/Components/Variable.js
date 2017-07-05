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
          disabled={this.props.isNotSupported}
          className="variable__input"
          onChange={evt => this.handleChange(evt, name)}
          type="color"
          pattern="^#([A-Fa-f0-9]{6})$"
          required
          value={hex}
        />
        <p className="variable__name">{name}</p>
        <p className="variable__hex">{hex}</p>
      </li>
    );
  }
}
