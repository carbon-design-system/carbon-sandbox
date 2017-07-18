import React, { Component } from 'react';
import { Checkbox } from 'carbon-components-react';

export default class Filter extends Component {
  state = {
    expanded: false,
    checkedItems: [],
  };

  onChange = (isChecked, name) => {
    const items = this.state.checkedItems;
    const index = items.indexOf(name);

    if (isChecked) {
      items.push(name);
    }

    if (index !== -1) {
      items.splice(index, 1);
    }

    this.setState({
      checkedItems: items,
    });

    this.props.callbackParent(this.state.checkedItems);
  };

  handleClear = () => {
    const sidebar = document.querySelector('.sidebar');
    const checkboxes = sidebar.querySelectorAll('.bx--checkbox');
    checkboxes.forEach(box => {
      if (box.checked) box.checked = false;
    });

    this.setState({
      checkedItems: [],
    });

    this.props.callbackParent([]);
  };

  handleToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const { expanded, checkedItems } = this.state;
    return (
      <div
        className={
          expanded
            ? 'filter-container filter-container--active'
            : 'filter-container'
        }
        aria-expanded={expanded}
      >
        <section className="filter-heading">
          <button className="filter-text" onClick={this.handleToggle}>
            <span>FILTER</span>
            <svg
              className={
                expanded ? 'filter-icon filter-icon--active' : 'filter-icon'
              }
              width="10px"
              height="5px"
              viewBox="0 0 10 5"
              fillRule="evenodd"
            >
              <polygon points="10 0 5 5 0 0" />
            </svg>
          </button>
          <button
            onClick={this.handleClear}
            className={
              checkedItems.length > 0 ? 'bx--link bx--link--active' : 'bx--link'
            }
          >
            Clear Filters
          </button>
        </section>
        <section
          className={
            expanded
              ? 'filter-checkboxes filter-checkboxes--active'
              : 'filter-checkboxes'
          }
        >
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="accordion"
            labelText="Accordion"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="breadcrumb"
            labelText="Breadcrumb"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="button"
            labelText="Button"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="card"
            labelText="Card"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="checkbox"
            labelText="Checkbox"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="code-snippet"
            labelText="Code Snippet"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="content-switcher"
            labelText="Content Switcher"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="data-table"
            labelText="Data Table"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="date-picker"
            labelText="Date Picker"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="dropdown"
            labelText="Dropdown"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="file-uploader"
            labelText="File Uploader"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="footer"
            labelText="Footer"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="interior-left-nav"
            labelText="Interior Left Nav"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="link"
            labelText="Link"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="list"
            labelText="List"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="loading"
            labelText="Loading"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="modal"
            labelText="Modal"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="module"
            labelText="Module"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="notification"
            labelText="Notification"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="number-input"
            labelText="Number Input"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="overflow-menu"
            labelText="Overflow Menu"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="pagination"
            labelText="Pagination"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="progress-indicator"
            labelText="Progress Indicator"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="radio-button"
            labelText="Radio Button"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="search"
            labelText="Search"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="select"
            labelText="Select"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="structured-list"
            labelText="Structured List"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="tabs"
            labelText="Tabs"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="tag"
            labelText="Tag"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="textarea"
            labelText="Text Area"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="text-input"
            labelText="Text Input"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="time-picker"
            labelText="Time Picker"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="toggle"
            labelText="Toggle"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="toolbar"
            labelText="Toolbar"
          />
          <Checkbox
            tabIndex={expanded ? 0 : -1}
            onChange={this.onChange}
            id="tooltip"
            labelText="Tooltip"
          />
        </section>
      </div>
    );
  }
}
