import React, { Component } from 'react';
import { Button, Dropdown, DropdownItem } from 'carbon-components-react';
import Filter from './Filter';
import Variable from './Variable';
import Social from './Social';
import watson from '../assets/themes/watson';
import darkui from '../assets/themes/dark-ui';
import carbon from '../assets/themes/carbon';
import genesis from '../assets/themes/genesis';

export default class Sidebar extends Component {
  state = {
    edited: false,
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

  componentDidMount = () => {
    let id = '';
    if (window.localStorage && window.localStorage.getItem('id')) {
      return;
    } else {
      id = Math.random().toString(36).substring(7);
      window.localStorage.setItem('id', id);
    }
  };

  getNewStyles = () => {
    const sendData = {
      data: this.state,
      id: window.localStorage.getItem('id'),
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

  updateColor = (variable, hex) => {
    this.setState({
      edited: true,
      [variable]: hex,
    });
  };

  resetColors = () => {
    const sidebar = document.querySelector('.sidebar');
    const theme = {
      value: sidebar.querySelector('.bx--dropdown-text').textContent.toLowerCase(),
    };
    this.setState({
      edited: false,
    });
    this.handleThemeChange(theme);
  };

  handleThemeChange = theme => {
    if (theme.value === 'default') {
      this.setState(carbon);
    } else if (theme.value === 'darkui' || theme.value === 'dark') {
      this.setState(darkui);
    } else if (theme.value === 'watson') {
      this.setState(watson);
    } else if (theme.value === 'genesis') {
      this.setState(genesis);
    }
  };

  render() {
    this.getNewStyles();

    return (
      <div className="sidebar">
        <header>
          <h1 className="sidebar__title">Carbon <span>Themes</span></h1>
          <Dropdown defaultText="Default" value="default" onChange={this.handleThemeChange}>
            <DropdownItem itemText="Default" value="default" />
            <DropdownItem itemText="Dark" value="darkui" />
            <DropdownItem itemText="Watson" value="watson" />
            <DropdownItem itemText="Genesis" value="genesis" />
          </Dropdown>
        </header>

        <div className="variables">
          <h5 className="variables__heading">
            COLOR VARIABLES
            <button
              className={
                this.state.edited
                  ? 'bx--link variables-reset'
                  : 'bx--link variables-reset variables-reset--hidden'
              }
              onClick={this.resetColors}
            >
              Reset
            </button>
          </h5>
          <p className="variables__subtitle">
            Click on a swatch to change a
            {' '}
            <a
              href="http://carbondesignsystem.com/style/colors/usage"
              className="bx--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              color variable’s
            </a>
            {' '}
            value across the
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
            <Variable updateColor={this.updateColor} name="ui-01" hex={this.state['ui-01']} />
            <Variable updateColor={this.updateColor} name="ui-02" hex={this.state['ui-02']} />
            <Variable updateColor={this.updateColor} name="ui-03" hex={this.state['ui-03']} />
            <Variable updateColor={this.updateColor} name="ui-04" hex={this.state['ui-04']} />
            <Variable updateColor={this.updateColor} name="ui-05" hex={this.state['ui-05']} />
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
          <Filter callbackParent={this.props.callbackParent} />
        </div>

        <div className="export">
          <Button href="tmp/export.scss" download="export.scss">
            Export theme SCSS
          </Button>
        </div>
        <footer className="footer">
          <Social />
          <a
            href="http://www.carbondesignsystem.com/"
            className="bx--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carbon Design System
          </a>
          <span className="footer-copy">Copyright © 2017 IBM</span>
        </footer>
      </div>
    );
  }
}
