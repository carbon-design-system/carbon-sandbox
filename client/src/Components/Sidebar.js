import React, { Component } from 'react';
import Dropdown from 'carbon-react/components/Dropdown';
import DropdownItem from 'carbon-react/components/DropdownItem';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <header>
          <h1 className="sidebar__title">Carbon <span>Themes</span></h1>
          <Dropdown
            defaultText="Default"
            value="default"
            onChange={selectedItem => console.log(selectedItem)}
          >
            <DropdownItem itemText="Default" value="default" />
            <DropdownItem itemText="Dark" value="dark" />
            <DropdownItem itemText="Watson" value="watson" />
            <DropdownItem itemText="Analytics" value="analytics" />
          </Dropdown>
        </header>
      </div>
    );
  }
}
