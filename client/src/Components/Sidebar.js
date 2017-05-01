import React, { Component } from 'react';
import Button from 'carbon-react/components/Button';
import Dropdown from 'carbon-react/components/Dropdown';
import DropdownItem from 'carbon-react/components/DropdownItem';
import Filter from './Filter';
import Variable from './Variable';

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

        <div className="variables">
          <h5 className="variables__heading">COLOR VARIABLES</h5>
          <p className="variables__subtitle">
            Click on a swatch to change a color variable’s value across the theme.
          </p>
          <ul className="variables__list">
            <Variable name="brand-01" hex="#3d70b2" />
            <Variable name="brand-02" hex="#5596e6" />
            <Variable name="brand-03" hex="#41d6c3" />
          </ul>
          <ul className="variables__list">
            <Variable name="ui-01" hex="#ffffff" />
            <Variable name="ui-02" hex="#f5f7fa" />
            <Variable name="ui-03" hex="#f0f3f6" />
            <Variable name="ui-04" hex="#dfe3e6" />
            <Variable name="ui-05" hex="#8c9ba5" />
          </ul>
          <ul className="variables__list">
            <Variable name="text-01" hex="#152934" />
            <Variable name="text-02" hex="#5a6872" />
            <Variable name="text-03" hex="#5a6872" />
          </ul>
          <ul className="variables__list">
            <Variable name="inverse-01" hex="#ffffff" />
            <Variable name="field-01" hex="#EBF0F7" />
          </ul>
          <ul className="variables__list">
            <Variable name="support-01" hex="#e71d32" />
            <Variable name="support-02" hex="#5aa700" />
            <Variable name="support-03" hex="#efc100" />
            <Variable name="support-04" hex="#5aaafa" />
          </ul>
        </div>

        <div className="filter">
          <Filter />
        </div>

        <div className="export">
          <Button>Export theme SCSS</Button>
        </div>
      </div>
    );
  }
}
