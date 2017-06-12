import React, { Component } from 'react';
import { Button, Dropdown, DropdownItem } from 'carbon-components-react';
import Filter from './Filter';
import Variable from './Variable';

export default class Sidebar extends Component {
  state = {
    'brand-01': '#3d70b2',
    'brand-02': '#5596e6',
    'brand-03': '#41d6c3',
    'ui-01': '#ffffff',
    'ui-02': '#f5f7fa',
    'ui-03': '#f0f3f6',
    'ui-04': '#dfe3e6',
    'ui-05': '#8c9ba5',
    'text-01': '#152934',
    'text-02': '#5a6872',
    'text-03': '#5a6872',
    'inverse-01': '#ffffff',
    'field-01': '#ebf0f7',
    'support-01': '#e71d32',
    'support-02': '#5aa700',
    'support-03': '#efc100',
    'support-04': '#5aaafa',
  };

  updateColor = (variable, hex) => {
    const previousValue = this.state.variable;

    this.setState({
      [variable]: hex,
    });
  };

  getNewStyles = () => {
    const sendData = {
      data: this.state,
    };

    fetch('/api/updateSheet', {
      method: 'POST',
      body: JSON.stringify(sendData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(data => data.json())
      .then(data => {
        const link = document.createElement('link');
        link.href = data.route;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);
      });
  };

  render() {
    this.getNewStyles();

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
            Click on a swatch to change a color variable’s value across the
            theme.
          </p>
          <ul className="variables__list">
            <Variable
              updateColor={this.updateColor}
              name="brand-01"
              hex={this.state['brand-01']}
            />
            <Variable
              updateColor={this.updateColor}
              name="brand-02"
              hex={this.state['brand-02']}
            />
            <Variable
              updateColor={this.updateColor}
              name="brand-03"
              hex={this.state['brand-03']}
            />
          </ul>
          <ul className="variables__list">
            <Variable
              updateColor={this.updateColor}
              name="ui-01"
              hex={this.state['ui-01']}
            />
            <Variable
              updateColor={this.updateColor}
              name="ui-02"
              hex={this.state['ui-02']}
            />
            <Variable
              updateColor={this.updateColor}
              name="ui-03"
              hex={this.state['ui-03']}
            />
            <Variable
              updateColor={this.updateColor}
              name="ui-04"
              hex={this.state['ui-04']}
            />
            <Variable
              updateColor={this.updateColor}
              name="ui-05"
              hex={this.state['ui-05']}
            />
          </ul>
          <ul className="variables__list">
            <Variable
              updateColor={this.updateColor}
              name="text-01"
              hex={this.state['text-01']}
            />
            <Variable
              updateColor={this.updateColor}
              name="text-02"
              hex={this.state['text-02']}
            />
            <Variable
              updateColor={this.updateColor}
              name="text-03"
              hex={this.state['text-03']}
            />
          </ul>
          <ul className="variables__list">
            <Variable
              updateColor={this.updateColor}
              name="inverse-01"
              hex={this.state['inverse-01']}
            />
            <Variable
              updateColor={this.updateColor}
              name="field-01"
              hex={this.state['field-01']}
            />
          </ul>
          <ul className="variables__list">
            <Variable
              updateColor={this.updateColor}
              name="support-01"
              hex={this.state['support-01']}
            />
            <Variable
              updateColor={this.updateColor}
              name="support-02"
              hex={this.state['support-02']}
            />
            <Variable
              updateColor={this.updateColor}
              name="support-03"
              hex={this.state['support-03']}
            />
            <Variable
              updateColor={this.updateColor}
              name="support-04"
              hex={this.state['support-04']}
            />
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
