import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CodeSnippet,
  ContentSwitcher,
  DatePicker,
  DatePickerInput,
  Dropdown,
  DropdownItem,
  FileUploader,
  Footer,
  FormGroup,
  Icon,
  Link,
  ListItem,
  Loading,
  ModalWrapper,
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
  SelectItemGroup,
  Slider,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell,
  Switch,
  Tab,
  Tabs,
  Tag,
  TextArea,
  TextInput,
  TimePicker,
  TimePickerSelect,
  Toolbar,
  ToolbarItem,
  ToolbarTitle,
  ToolbarOption,
  ToolbarDivider,
  Toggle,
  TooltipSimple,
  UnorderedList,
} from 'carbon-components-react';
import DataTableExample from './DataTableExample';

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
          }>
          <Accordion>
            <AccordionItem title="Section 1 title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            </AccordionItem>
            <AccordionItem title="Section 2 title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            </AccordionItem>
            <AccordionItem title="Section 3 title">
              <Select
                id="select-1"
                defaultValue="placeholder-item">
                <SelectItem
                  disabled
                  hidden
                  value="placeholder-item"
                  text="Choose an option"
                />
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
                <SelectItem value="option-3" text="Option 3" />
              </Select>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          className={
            checkedItems.includes('breadcrumb') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Breadcrumb>
            <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div
          className={
            checkedItems.includes('button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Button>Primary button</Button>
          <Button kind="secondary">Secondary button</Button>
          <Button small>Small button</Button>
          <Button disabled>Disabled</Button>
          <Button icon="search--glyph" iconDescription="Search">
            With an icon
          </Button>
          <Button
            kind="secondary"
            icon="search--glyph"
            iconDescription="Search">
            With an icon
          </Button>
          <Button kind="danger" className="some-class">
            Danger button
          </Button>
        </div>

        <div
          className={
            checkedItems.includes('checkbox') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Checkbox heading</legend>
            <Checkbox
              id="checkbox-label-1"
              labelText="Checkbox label 1"
            />
            <Checkbox
              id="checkbox-label-3"
              labelText="Checkbox label 3"
              indeterminate
            />
            <Checkbox
              defaultChecked
              id="checkbox-label-2"
              labelText="Checkbox label 2"
            />
          </fieldset>
        </div>

        <div
          className={
            checkedItems.includes('code-snippet') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
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
          }>
          <ContentSwitcher
            selectedIndex={1}
            onChange={() => console.log('change')}>
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
          }>
          <DataTableExample />
        </div>

        <div
          className={
            checkedItems.includes('date-picker') || !isFiltering
              ? 'component__container date-picker'
              : 'component__container component__container--hidden date-picker'
          }>
          <DatePicker id="date-picker-demo" datePickerType="range">
            <DatePickerInput
              className="some-class"
              labelText="Select a date"
              placeholder="mm/dd/yyyy"
              id="date-picker-input-id"
            />
            <DatePickerInput
              className="some-class"
              labelText="Select a date"
              placeholder="mm/dd/yyyy"
              id="date-picker-id-2"
            />
          </DatePicker>
        </div>

        <div
          className={
            checkedItems.includes('dropdown') || !isFiltering
              ? 'component__container dropdown'
              : 'component__container component__container--hidden'
          }>
          <Dropdown ariaLabel="dropdown menu label" defaultText="Choose something..">
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
          }>
          <FileUploader
            id="file-1"
            labelTitle="Upload"
            labelDescription="only .jpg files at 500mb or less"
            buttonLabel="Add files"
            filenameStatus="edit"
            multiple
          />
        </div>

        <div
          className={
            checkedItems.includes('footer') || !isFiltering
              ? 'component__container component__container--footer'
              : 'component__container component__container--footer component__container--hidden'
          }>
          <Footer />
        </div>

        <div
          className={
            checkedItems.includes('link') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Link href="#">Link</Link>
        </div>

        <div
          className={
            checkedItems.includes('list') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
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
          }>
          <Loading withOverlay={false} />
        </div>

        <div
          className={
            checkedItems.includes('modal') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ModalWrapper
            id="transactional-modal"
            buttonTriggerText="Transactional Modal"
            modalLabel="Label (optional)"
            modalHeading="Transactional Modal">
            <p className="bx--modal-content__text">
              Transactional modals are used to validate user decisions os to
              gain secondary confirmation from the user. Typically, the modal
              requests either a 'yes' or 'no' response.
            </p>
            <p className="bx--modal-content__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse cursus fermentum risus, sit amet fringilla nunc
              pellentesque quis. Duis quis odio ultrices, cursus lacus ac,
              posuere felis. Donec dignissim libero in augue mattis, a molestie
              metus vestibulum. Aliquam placerat felis ultrices lorem
              condimentum, nec ullamcorper felis porttitor. Nunc at maximus
              purus. Curabitur sodales eros sit amet dolor bibendum gravida. Sed
              efficitur, arcu imperdiet vestibulum ultrices, risus diam
              ullamcorper arcu, sit amet gravida metus ligula quis metus.
            </p>
            <p className="bx--modal-content__text">
              Donec id sapien ex. Duis aliquam tortor nec mollis pulvinar. Fusce
              sit amet libero blandit, sollicitudin est in, tempor lectus. Donec
              convallis condimentum mi eu ultrices. Sed risus ipsum, fermentum
              ut fringilla sed, rutrum eget purus. Morbi molestie dui nisi,
              consectetur posuere ante viverra non. Integer cursus quis risus ut
              cursus. Aenean ut dictum nibh. Cras at leo interdum, ornare elit
              non, posuere enim. Mauris hendrerit nunc eget malesuada congue.
              Nam velit leo, convallis et lobortis ac, semper ut urna. Etiam nec
              neque urna. Donec sagittis eros urna, at aliquet erat consectetur
              ac. Proin faucibus sed erat tempus accumsan. Nam pretium malesuada
              commodo. Mauris mollis elementum neque, sed ornare urna vestibulum
              non. Curabitur elementum in ex in commodo. Donec laoreet consequat
              sapien. Sed eget tortor aliquam, facilisis est vitae, commodo
              magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris a lobortis ex. Nulla mollis tincidunt sodales.
            </p>
          </ModalWrapper>
        </div>

        <div
          className={
            checkedItems.includes('notification') || !isFiltering
              ? 'component__container component__container--notification'
              : 'component__container component__container--notification component__container--hidden'
          }>
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
          }>
          <NumberInput label="Number Input" id="number-input-demo" />
        </div>

        <div
          className={
            checkedItems.includes('overflow-menu') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
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
          }>
          <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={103} />
        </div>

        <div
          className={
            checkedItems.includes('progress-indicator') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ProgressIndicator currentIndex={3}>
            <ProgressStep
              label="Step 1"
              description="Step 1: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 2"
              description="Step 2: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 3"
              description="Step 3: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 4"
              description="Step 4: Getting Started with Node.js"
            />
            <ProgressStep
              label="Step 5"
              description="Step 5: Getting Started with Node.js"
            />
          </ProgressIndicator>
        </div>

        <div
          className={
            checkedItems.includes('radio-button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <FormGroup legendText="Radio Group">
            <RadioButtonGroup
              name="radio-button-group"
              defaultSelected="default-selected"
              legend="Group Legend">
              <RadioButton
                value="standard"
                id="radio-1"
                labelText="Standard Radio Button"
              />
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
              ? 'component__container component__container--search'
              : 'component__container component__container--search component__container--hidden'
          }>
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
          }>
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
            checkedItems.includes('slider') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Slider
            id="slider-1"
            value={50}
            min={0}
            max={100}
            step={1}
            labelText="Slider Label"
            onChange={() => console.log('change')}
          />
        </div>

        <div
          className={
            checkedItems.includes('structured-list') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <StructuredListWrapper>
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head>Service</StructuredListCell>
                <StructuredListCell head>Type</StructuredListCell>
                <StructuredListCell head>Description</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow>
                <StructuredListCell noWrap>Apache Spark</StructuredListCell>
                <StructuredListCell>IBM</StructuredListCell>
                <StructuredListCell>
                  Apache Spark is an open source cluster computing framework
                  optimized for extremely fast and large scale data processing,
                  which you can access via the newly integrated notebook
                  interface IBM Analytics for Apache Spark.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow>
                <StructuredListCell noWrap>Cloudant</StructuredListCell>
                <StructuredListCell>IBM</StructuredListCell>
                <StructuredListCell>
                  Cloudant NoSQL DB is a fully managed data layer designed for
                  modern web and mobile applications that leverages a flexible
                  JSON schema.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
          <StructuredListWrapper selection border>
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head />
                <StructuredListCell head>Service</StructuredListCell>
                <StructuredListCell head>Type</StructuredListCell>
                <StructuredListCell head>Description</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow label htmlFor="apache-spark">
                <StructuredListInput
                  id="apache-spark"
                  value="apache-spark"
                  title="apache-spark"
                  name="services"
                  defaultChecked
                />
                <StructuredListCell>
                  <Icon
                    className="bx--structured-list-svg"
                    name="checkmark--glyph"
                    description="select a service"
                  />
                </StructuredListCell>
                <StructuredListCell>Apache Spark</StructuredListCell>
                <StructuredListCell>IBM</StructuredListCell>
                <StructuredListCell>
                  Apache Spark is an open source cluster computing framework
                  optimized for extremely fast and large scale data processing,
                  which you can access via the newly integrated notebook
                  interface IBM Analytics for Apache Spark.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow label htmlFor="cloudant">
                <StructuredListInput
                  id="cloudant"
                  value="cloudant"
                  title="cloudant"
                  name="services"
                />
                <StructuredListCell>
                  <Icon
                    className="bx--structured-list-svg"
                    name="checkmark--glyph"
                    description="select a service"
                  />
                </StructuredListCell>
                <StructuredListCell>Cloudant</StructuredListCell>
                <StructuredListCell>IBM</StructuredListCell>
                <StructuredListCell>
                  Cloudant NoSQL DB is a fully managed data layer designed for
                  modern web and mobile applications that leverages a flexible
                  JSON schema.
                </StructuredListCell>
              </StructuredListRow>
            </StructuredListBody>
          </StructuredListWrapper>
        </div>

        <div
          className={
            checkedItems.includes('tabs') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
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
          }>
          <Tag key="ibm" className="some-class" type="ibm" />
        </div>

        <div
          className={
            checkedItems.includes('textarea') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <TextArea id="text-area-demo-1" labelText="Text Area" />
        </div>

        <div
          className={
            checkedItems.includes('text-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <TextInput
            labelText="Text Input"
            id="text-input-demo"
            placeholder="Hint text here"
          />
        </div>

        <div
          className={
            checkedItems.includes('time-picker') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <TimePicker id="time-picker-1">
            <TimePickerSelect labelText="label for time picker" id="time-picker-select-1">
              <SelectItem value="AM" text="AM" />
              <SelectItem value="PM" text="PM" />
            </TimePickerSelect>
            <TimePickerSelect labelText="label for time picker" id="time-picker-select-2">
              <SelectItem value="Timezone 1" text="Timezone 1" />
              <SelectItem value="Timezone 2" text="Timezone 2" />
            </TimePickerSelect>
          </TimePicker>
        </div>

        <div
          className={
            checkedItems.includes('toggle') || !isFiltering
              ? 'component__container component__container--toggle'
              : 'component__container component__container--toggle component__container--hidden'
          }>
          <Toggle id="toggle-demo" />
        </div>

        <div
          className={
            checkedItems.includes('toolbar') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Toolbar className="some-class">
            <ToolbarItem type="search" placeHolderText="Search" />
            <ToolbarItem>
              <OverflowMenu iconName="filter">
                <ToolbarTitle title="FILTER BY" />
                <ToolbarOption>
                  <Checkbox
                    className="some-class"
                    id="opt-1"
                    labelText="Filter option 1"
                  />
                </ToolbarOption>
                <ToolbarOption>
                  <Checkbox
                    className="some-class"
                    id="opt-2"
                    labelText="Filter option 2"
                  />
                </ToolbarOption>
                <ToolbarOption>
                  <Checkbox
                    className="some-class"
                    id="opt-3"
                    labelText="Filter option 3"
                  />
                </ToolbarOption>
              </OverflowMenu>
            </ToolbarItem>
            <ToolbarItem>
              <OverflowMenu>
                <OverflowMenuItem itemText="Refresh table" />
                <ToolbarDivider />
                <ToolbarTitle title="ROW HEIGHT" />
                <ToolbarOption>
                  <RadioButton
                    value="short"
                    id="radio-demo-1"
                    name="toolbar-radio"
                    labelText="Short"
                  />
                </ToolbarOption>
                <ToolbarOption>
                  <RadioButton
                    value="tall"
                    id="radio-demo-2"
                    name="toolbar-radio"
                    labelText="Tall"
                  />
                </ToolbarOption>
              </OverflowMenu>
            </ToolbarItem>
          </Toolbar>
        </div>

        <div
          className={
            checkedItems.includes('tooltip') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <TooltipSimple text="hello">
            <Link href="#">Tooltip - hover</Link>
          </TooltipSimple>
        </div>
      </div>
    );
  }
}
