import React, { Component } from 'react';
import { Checkbox } from 'carbon-components-react';

export default class Filter extends Component {
  state = {
    active: false,
    checkedItems: [],
  };
  onChange = (isChecked, name) => {
    const items = this.state.checkedItems;
    if (isChecked) {
      items.push(name);
    } else {
      items.pop(name);
    }

    this.setState({
      checkedItems: items,
    });

    this.props.callbackParent(this.state.checkedItems);
  };
  render() {
    const { name, hex } = this.props;
    return (
      <div className="filter__container">
        <section className="filter-text">
          <p>
            Filter
            <svg
              className={this.state.active ? 'filter-icon filter-icon--active' : 'filter-icon'}
              width="10px"
              height="5px"
              viewBox="0 0 10 5"
              fillRule="evenodd"
            >
              <polygon fill="#000000" points="10 0 5 5 0 0" />
            </svg>
          </p>
          {this.state.active ? <button className="bx--link">Clear Filters</button> : null}
        </section>
        <section
          className={
            this.state.active
              ? 'filter-checkboxes filter-checkboxes--active'
              : 'filter-checkboxes'
          }
        >
          <Checkbox onChange={this.onChange} id="accordion" labelText="Accordion" />
          <Checkbox onChange={this.onChange} id="breadcrumb" labelText="Breadcrumb" />
        </section>
      </div>
    );
  }
}
