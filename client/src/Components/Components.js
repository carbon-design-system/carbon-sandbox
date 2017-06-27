import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardFooter,
  CardContent,
  Checkbox,
  CodeSnippet,
  ContentSwitcher,
  Dropdown,
  DropdownItem,
  Footer,
  FormGroup,
  InteriorLeftNav,
  InteriorLeftNavItem,
  InteriorLeftNavList,
  Link,
  ListItem,
  Loading,
  Modal,
  ModalWrapper,
  Module,
  ModuleHeader,
  ModuleBody,
  Notification,
  NumberInput,
  OrderedList,
  OverflowMenu,
  OverflowMenuItem,
  Pagination,
  ProgressIndicator,
  ProgressStep,
  RadioButtonGroup,
  RadioButton,
  Search,
  Select,
  SelectItem,
  Switch,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Tab,
  Tabs,
  Tag,
  TextArea,
  TextInput,
  Toggle,
  TooltipSimple,
  UnorderedList,
} from 'carbon-components-react';
import { types } from 'carbon-components-react/es/components/Tag'; // bug with export
import FileUploader from 'carbon-components-react/es/components/FileUploader'; // bug with export
import SelectItemGroup from 'carbon-components-react/es/components/SelectItemGroup'; // bug with export

export default class Components extends Component {
  render() {
    const { checkedItems, isFiltering } = this.props;
    return (
      <div className="components">
        <div
          className={
            checkedItems.includes('accordion') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Accordion>
            <AccordionItem title="Label">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
            <AccordionItem title="Label with multiple words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={
            checkedItems.includes('breadcrumb') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Breadcrumb>
            <BreadcrumbItem href="www.google.com">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="www.google.com">Breadcrumb 3</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div
          className={
            checkedItems.includes('button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
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
          <Button icon="search--glyph" iconDescription="Search">With an Icon</Button>
          <Button kind="secondary" icon="search--glyph" iconDescription="Search">
            With an Icon
          </Button>
          <Button kind="danger" className="some-class">
            Danger Button
          </Button>
        </div>

        <div
          className={
            checkedItems.includes('card') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
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

        <div
          className={
            checkedItems.includes('checkbox') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Favorite Colors</legend>
            <Checkbox defaultChecked id="red" labelText="Red" />
            <Checkbox defaultChecked id="blue" labelText="Blue" />
          </fieldset>
        </div>

        <div
          className={
            checkedItems.includes('code-snippet') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <CodeSnippet type="terminal">
            {
              'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
            }
          </CodeSnippet>

          <CodeSnippet type="code">
            {`@mixin bx--snippet($type) {
  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }

  @if $type == 'terminal' {
    background-color: red;
  } @else if $type == 'code' {
    background-color: blue;
  } @else if $type == 'text' {
    background-color: white;
  }
}
              `}
          </CodeSnippet>
        </div>

        <div
          className={
            checkedItems.includes('content-switcher') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <ContentSwitcher selectedIndex={1}>
            <Switch kind="anchor" name="one" text="First section" />
            <Switch kind="anchor" name="two" text="Second section" />
            <Switch kind="anchor" name="three" text="Third section" />
          </ContentSwitcher>
        </div>

        <div
          className={
            checkedItems.includes('data-table') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Table>
            <TableHead>
              <TableRow header>
                <TableHeader>
                  First Name
                </TableHeader>
                <TableHeader>
                  Last Name
                </TableHeader>
                <TableHeader>
                  House
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData>
                  Harry
                </TableData>
                <TableData>
                  Potter
                </TableData>
                <TableData>
                  Gryffindor
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>
                  Hermoine
                </TableData>
                <TableData>
                  Granger
                </TableData>
                <TableData>
                  Gryffindor
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>
                  Blaise
                </TableData>
                <TableData>
                  Zambini
                </TableData>
                <TableData>
                  Slytherin
                </TableData>
              </TableRow>
              <TableRow>
                <TableData>
                  Jon
                </TableData>
                <TableData>
                  Snow
                </TableData>
                <TableData>
                  Stark
                </TableData>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div
          className={
            checkedItems.includes('dropdown') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Dropdown defaultText="Choose something..">
            <DropdownItem itemText="All" value="all" />
            <DropdownItem itemText="Cloud Foundry API" value="cloudFoundry" />
            <DropdownItem itemText="Staging" value="staging" />
            <DropdownItem itemText="Droplet Execution Agent" value="dea" />
            <DropdownItem itemText="Router" value="router" />
          </Dropdown>
        </div>

        <div
          className={
            checkedItems.includes('file-uploader') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <FileUploader
            className="some-class"
            id="file-1"
            labelDescription="Choose Files..."
          />
        </div>

        <div
          className={
            checkedItems.includes('footer') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Footer />
        </div>

        <div
          className={
            checkedItems.includes('interior-left-nav') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <InteriorLeftNav>
            <InteriorLeftNavList title="Example Item 1">
              <InteriorLeftNavItem href="#example-item-1A" label="Example Item 1A" />
              <InteriorLeftNavItem href="#example-item-1B" label="Example Item 1B" />
              <InteriorLeftNavItem href="#example-item-1C" label="Example Item 1C" />
              <InteriorLeftNavItem href="#example-item-1D" label="Example Item 1D" />
            </InteriorLeftNavList>
            <InteriorLeftNavList title="Example Item 2">
              <InteriorLeftNavItem href="#example-item-2A" label="Example Item 2A" />
              <InteriorLeftNavItem href="#example-item-2B" label="Example Item 2B" />
              <InteriorLeftNavItem href="#example-item-2C" label="Example Item 2C" />
              <InteriorLeftNavItem href="#example-item-2D" label="Example Item 2D" />
            </InteriorLeftNavList>
            <InteriorLeftNavItem href="#example-item-3" label="Example Item 3" />
            <InteriorLeftNavItem href="#example-item-4" label="Example Item 4" />
          </InteriorLeftNav>
        </div>

        <div
          className={
            checkedItems.includes('link') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Link href="#">A simple link</Link>
        </div>

        <div
          className={
            checkedItems.includes('list') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <OrderedList>
            <ListItem>
              Ordered List level 1
              <OrderedList nested>
                <ListItem>Ordered List level 2</ListItem>
                <ListItem>Ordered List level 2</ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>Ordered List level 1</ListItem>
            <ListItem>Ordered List level 1</ListItem>
          </OrderedList>

          <UnorderedList>
            <ListItem>
              Unordered List level 1
              <UnorderedList nested>
                <ListItem>Unordered List level 2</ListItem>
                <ListItem>Unordered List level 2</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>Unordered List level 1</ListItem>
            <ListItem>Unordered List level 1</ListItem>
          </UnorderedList>
        </div>

        <div
          className={
            checkedItems.includes('loading') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Loading withOverlay={false} />
        </div>

        <div
          className={
            checkedItems.includes('modal') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <ModalWrapper
            id="transactional-modal"
            buttonTriggerText="Transactional Modal"
            modalLabel="Label (optional)"
            modalText="This is a transactional modal"
            modalHeading="Transactional Modal"
          >
            <p className="bx--modal-content__text">
              Transactional modals are used to validate user decisions os to gain secondary
              confirmation from the user. Typically, the modal requests either a 'yes' or 'no'
              response.
            </p>
            <p className="bx--modal-content__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus
              fermentum risus, sit amet fringilla nunc pellentesque quis. Duis quis odio
              ultrices, cursus lacus ac, posuere felis. Donec dignissim libero in augue mattis,
              a molestie metus vestibulum. Aliquam placerat felis ultrices lorem condimentum,
              nec ullamcorper felis porttitor. Nunc at maximus purus. Curabitur sodales eros
              sit amet dolor bibendum gravida. Sed efficitur, arcu imperdiet vestibulum
              ultrices, risus diam ullamcorper arcu, sit amet gravida metus ligula quis metus.
            </p>
            <p className="bx--modal-content__text">
              Donec id sapien ex. Duis aliquam tortor nec mollis pulvinar. Fusce sit amet
              libero blandit, sollicitudin est in, tempor lectus. Donec convallis condimentum
              mi eu ultrices. Sed risus ipsum, fermentum ut fringilla sed, rutrum eget purus.
              Morbi molestie dui nisi, consectetur posuere ante viverra non. Integer cursus
              quis risus ut cursus. Aenean ut dictum nibh. Cras at leo interdum, ornare elit
              non, posuere enim. Mauris hendrerit nunc eget malesuada congue. Nam velit leo,
              convallis et lobortis ac, semper ut urna. Etiam nec neque urna. Donec sagittis
              eros urna, at aliquet erat consectetur ac. Proin faucibus sed erat tempus
              accumsan. Nam pretium malesuada commodo. Mauris mollis elementum neque, sed
              ornare urna vestibulum non. Curabitur elementum in ex in commodo. Donec laoreet
              consequat sapien. Sed eget tortor aliquam, facilisis est vitae, commodo magna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lobortis ex.
              Nulla mollis tincidunt sodales.
            </p>
          </ModalWrapper>
        </div>

        <div
          className={
            checkedItems.includes('module') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Module className="some-class" size="single">
            <ModuleHeader>Module Example</ModuleHeader>
            <ModuleBody>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting
                industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the
                1500s, when an unknown printer took a galley of type and
                scrambled it
                to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </ModuleBody>
          </Module>

          <Module className="some-class">
            <ModuleHeader>Module Example</ModuleHeader>
            <ModuleBody>
              <p>
                Lorem Ipsum is dummy text of the printing and typesetting
                industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the
                1500s, when an unknown printer took a galley of type and
                scrambled it
                to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </ModuleBody>
          </Module>
        </div>

        <div
          className={
            checkedItems.includes('notification') || !isFiltering
              ? 'component__container component__container--notification'
              : 'component__container component__container--notification component__container--hidden'
          }
        >
          <div>
            <Notification
              title="Warning notification:"
              subtitle="Here is a clear explanation of the warning"
              kind="warning"
            />
            <Notification
              title="Informational notification:"
              subtitle="Here is the information or directions"
              kind="info"
            />
            <Notification
              title="Error notification:"
              subtitle="Here is a clear explanation of the error"
              kind="error"
            />
            <Notification
              title="Success notification:"
              subtitle="Here is the information or directions"
              kind="success"
            />

          </div>
          <div>
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="warning"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="info"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="error"
            />
            <Notification
              title="'App Name' is stopped"
              subtitle="Your application was stopped"
              caption="05/09/2016 5:41:14 PM"
              kind="success"
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('number-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <NumberInput />
        </div>

        <div
          className={
            checkedItems.includes('overflow-menu') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <OverflowMenu>
            <OverflowMenuItem itemText="Stop App" />
            <OverflowMenuItem itemText="Restart App" />
            <OverflowMenuItem itemText="Rename App" />
            <OverflowMenuItem itemText="Edit Routes and Access" />
            <OverflowMenuItem itemText="Delete App" hasDivider isDelete />
          </OverflowMenu>
        </div>

        <div
          className={
            checkedItems.includes('pagination') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={103} />
        </div>

        <div
          className={
            checkedItems.includes('progress-indicator') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <ProgressIndicator currentIndex={3}>
            <ProgressStep label="Step 1" description="Step 1: Getting Started with Node.js" />
            <ProgressStep label="Step 2" description="Step 2: Getting Started with Node.js" />
            <ProgressStep label="Step 3" description="Step 3: Getting Started with Node.js" />
            <ProgressStep label="Step 4" description="Step 4: Getting Started with Node.js" />
            <ProgressStep label="Step 5" description="Step 5: Getting Started with Node.js" />
          </ProgressIndicator>
        </div>

        <div
          className={
            checkedItems.includes('radio-button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <FormGroup legendText="Radio Group">
            <RadioButtonGroup
              name="radio-button-group"
              defaultSelected="default-selected"
              legend="Group Legend"
            >
              <RadioButton value="standard" id="radio-1" labelText="Standard Radio Button" />
              <RadioButton
                value="default-selected"
                labelText="Default Selected Radio Button"
                id="radio-2"
              />
              <RadioButton
                value="disabled"
                labelText="Disabled Radio Button"
                id="radio-3"
                disabled
              />
            </RadioButtonGroup>
          </FormGroup>
        </div>

        <div
          className={
            checkedItems.includes('search') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Search
            id="search-1"
            labelText="Search"
            placeHolderText="Enter search text here..."
          />

          <Search
            small
            id="search-2"
            labelText="Search"
            placeHolderText="Enter search text here..."
          />
        </div>

        <div
          className={
            checkedItems.includes('select') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Select id="select-1" defaultValue="placeholder-item">
            <SelectItemGroup label="Starter">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </SelectItemGroup>
            <SelectItemGroup label="Advanced">
              <SelectItem value="option-3" text="Option 3" />
            </SelectItemGroup>
          </Select>
        </div>

        <div
          className={
            checkedItems.includes('tabs') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Tabs>
            <Tab label="Overview">
              <div>Overview Content</div>
            </Tab>
            <Tab label="Apple">
              <div>Apple Content</div>
            </Tab>
            <Tab label="Banana">
              <div>Banana Content</div>
            </Tab>
            <Tab label="Orange">
              <div>Orange Content</div>
            </Tab>
          </Tabs>
        </div>

        <div
          className={
            checkedItems.includes('tag') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          {types.map(type => <Tag key={type} className="some-class" type={type} />)}
        </div>

        <div
          className={
            checkedItems.includes('textarea') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <TextArea />
        </div>

        <div
          className={
            checkedItems.includes('text-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <TextInput placeholder="Hint text here" />
        </div>

        <div
          className={
            checkedItems.includes('toggle') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <Toggle />
        </div>

        <div
          className={
            checkedItems.includes('tooltip') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }
        >
          <TooltipSimple text="hello">
            <Link href="#">Tooltip - hover</Link>
          </TooltipSimple>
        </div>

      </div>
    );
  }
}
