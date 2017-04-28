import React, { Component } from 'react';
import Accordion from 'carbon-react/components/Accordion';
import AccordionItem from 'carbon-react/components/AccordionItem';
import Breadcrumb from 'carbon-react/components/Breadcrumb';
import BreadcrumbItem from 'carbon-react/components/BreadcrumbItem';
import Button from 'carbon-react/components/Button';
import Card from 'carbon-react/components/Card';
import CardFooter from 'carbon-react/components/CardFooter';
import CardContent from 'carbon-react/components/CardContent';
import Checkbox from 'carbon-react/components/Checkbox';
import CodeSnippet from 'carbon-react/components/CodeSnippet';
import ContentSwitcher from 'carbon-react/components/ContentSwitcher';
import Switch from 'carbon-react/components/Switch';

import Icon from 'carbon-react/components/Icon';
import Link from 'carbon-react/components/Link';
import OverflowMenu from 'carbon-react/components/OverflowMenu';
import OverflowMenuItem from 'carbon-react/components/OverflowMenuItem';

export default class Components extends Component {
  render() {
    return (
      <div className="components">
        <div className="component__container">
          <Accordion>
            <AccordionItem title="Label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
            <AccordionItem title="Label with multiple words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
          </Accordion>
        </div>

        <div className="component__container">
          <Breadcrumb>
            <BreadcrumbItem href="www.google.com">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 3</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="component__container">
          <Button>
            Primary Button
          </Button>
          <Button kind="secondary">
            Secondary Button
          </Button>
          <Button small>
            Small Button
          </Button>
          <Button disabled>Disabled</Button>
          <Button icon="search" iconDescription="Search">With an Icon</Button>
          <Button kind="secondary" icon="search" iconDescription="Search">
            With an Icon
          </Button>
          <Button kind="danger" className="some-class">
            Danger Button
          </Button>
        </div>

        <div className="component__container">
          <Card>
            <CardContent
              cardTitle="Card Name"
              cardIcon="app-services"
              cardInfo={['Secondary Information']}
            />
            <CardFooter>
              <Button small kind="primary">View credentials</Button>
              <Link href="#" className="bx--card-footer__link">Link</Link>
            </CardFooter>
          </Card>
        </div>

        <div className="component__container">
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Favorite Colors</legend>
            <Checkbox defaultChecked id="red" labelText="Red" />
            <Checkbox defaultChecked id="blue" labelText="Blue" />
          </fieldset>
        </div>

        <div className="component__container">
          <CodeSnippet type="terminal">
            {
              'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
            }
          </CodeSnippet>
        </div>

        <div className="component__container">
          <ContentSwitcher
            selectedIndex={1}
            onChange={() => console.log('change')}
          >
            <Switch kind="anchor" name="one" text="First section" />
            <Switch kind="anchor" name="two" text="Second section" />
            <Switch kind="anchor" name="three" text="Third section" />
          </ContentSwitcher>
        </div>

      </div>
    );
  }
}
