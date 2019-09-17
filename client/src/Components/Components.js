import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  ClickableTile,
  CodeSnippet,
  ComboBox,
  ContentSwitcher,
  DatePicker,
  DatePickerInput,
  DropdownV2,
  FileUploader,
  FormGroup,
  InlineNotification,
  Link,
  ListItem,
  Loading,
  ModalWrapper,
  MultiSelect,
  NumberInput,
  OrderedList,
  OverflowMenu,
  OverflowMenuItem,
  PaginationV2,
  ProgressIndicator,
  ProgressStep,
  RadioButtonGroup,
  RadioButton,
  RadioTile,
  Search,
  Select,
  SelectItem,
  SelectItemGroup,
  SelectableTile,
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
  TextArea,
  TextInput,
  Tile,
  TileGroup,
  TimePicker,
  TimePickerSelect,
  ToastNotification,
  Toolbar,
  ToolbarItem,
  ToolbarTitle,
  ToolbarOption,
  ToolbarDivider,
  Tooltip,
  TooltipDefinition,
  TooltipIcon,
  Toggle,
  ToggleSmall,
  UnorderedList,
} from 'carbon-components-react';
import AddFilled16 from '@carbon/icons-react/lib/add--filled/16';
import CheckmarkFilled16 from '@carbon/icons-react/lib/checkmark--filled/16';
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItem>
            <AccordionItem title="Section 2 title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItem>
            <AccordionItem title="Section 3 title">
              <Select id="select-1" defaultValue="placeholder-item">
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
          <Button small>Small primary button</Button>
          <Button small kind="secondary">
            Small secondary Button
          </Button>
          <Button disabled>Disabled button</Button>
          <Button
            kind="ghost"
            className="some-class"
            renderIcon={AddFilled16}
            iconDescription="Add">
            Ghost button
          </Button>
          <Button kind="danger">Danger button</Button>
          <Button kind="tertiary">Tertiary button</Button>
        </div>

        <div
          className={
            checkedItems.includes('checkbox') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Checkbox heading</legend>
            <Checkbox id="checkbox-label-1" labelText="Checkbox label 1" />
            <Checkbox
              id="checkbox-label-2"
              labelText="Checkbox label 1"
              indeterminate
            />
            <Checkbox
              defaultChecked
              id="checkbox-label-3"
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
          <div className="white-bg">
            <CodeSnippet
              type="inline"
              feedback="Feedback Enabled 👍"
              copyLabel="Copy Code">
              {'node -v'}
            </CodeSnippet>
          </div>
          <CodeSnippet
            type="inline"
            light
            feedback="Feedback Enabled 👍"
            copyLabel="Copy Code">
            {'node -v'}
          </CodeSnippet>
          <CodeSnippet
            type="single"
            feedback="Feedback Enabled 👍"
            copyLabel="Copy Code">
            {
              'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
            }
          </CodeSnippet>

          <CodeSnippet
            type="multi"
            feedback="Feedback Enabled 👍"
            copyLabel="Copy Code">
            {`@mixin grid-container {
  width: 100%;
  padding-right: padding(mobile);
  padding-left: padding(mobile);

  @include breakpoint(bp--xs--major) {
    padding-right: padding(xs);
  }
}  `}
          </CodeSnippet>
        </div>

        <div
          className={
            checkedItems.includes('combo-box') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ComboBox
            items={[
              {
                id: 'option-1',
                text: 'Option 1',
              },
              {
                id: 'option-2',
                text: 'Option 2',
              },
              {
                id: 'option-3',
                text: 'Option 3',
              },
              {
                id: 'option-4',
                text: 'Option 4',
              },
            ]}
            itemToString={item => (item ? item.text : '')}
            placeholder="Filter..."
            onChange={() => {}}
          />
        </div>

        <div
          className={
            checkedItems.includes('content-switcher') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ContentSwitcher onChange={() => {}}>
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
          <DatePicker light datePickerType="range" dateFormat="m/d/Y">
            <DatePickerInput
              labelText="From Date"
              placeholder="mm/dd/yyyy"
              locale="en"
              id="date-picker-input-id"
            />
            <DatePickerInput
              labelText="To Date"
              placeholder="mm/dd/yyyy"
              id="date-picker-input-id-2"
            />
          </DatePicker>
          <div className="white-bg">
            <DatePicker datePickerType="range" dateFormat="m/d/Y">
              <DatePickerInput
                labelText="From Date"
                placeholder="mm/dd/yyyy"
                locale="en"
                id="date-picker-input-id-3"
              />
              <DatePickerInput
                labelText="To Date"
                placeholder="mm/dd/yyyy"
                id="date-picker-input-id-4"
              />
            </DatePicker>
          </div>
        </div>

        <div
          className={
            checkedItems.includes('dropdown') || !isFiltering
              ? 'component__container dropdown'
              : 'component__container component__container--hidden'
          }>
          <DropdownV2
            light
            label="Label"
            items={[
              {
                id: 'option-1',
                text: 'Option 1',
              },
              {
                id: 'option-2',
                text: 'Option 2',
              },
              {
                id: 'option-3',
                text: 'Option 3',
              },
              {
                id: 'option-4',
                text: 'Option 4',
              },
            ]}
            itemToString={item => (item ? item.text : '')}
          />
          <div className="white-bg">
            <DropdownV2
              label="Label"
              items={[
                {
                  id: 'option-1',
                  text: 'Option 1',
                },
                {
                  id: 'option-2',
                  text: 'Option 2',
                },
                {
                  id: 'option-3',
                  text: 'Option 3',
                },
                {
                  id: 'option-4',
                  text: 'Option 4',
                },
              ]}
              itemToString={item => (item ? item.text : '')}
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('file-uploader') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <div className="bx--file__container">
            <FileUploader
              labelTitle="Upload"
              labelDescription="only .jpg and .png files at 500mb or less"
              buttonLabel="Add files"
              filenameStatus="edit"
              accept={['.jpg', '.png']}
              multiple
              ref={fileUploader => (this.fileUploader = fileUploader)}
            />
            <Button
              kind="secondary"
              small
              style={{ marginTop: '1rem' }}
              onClick={() => {
                this.fileUploader.clearFiles();
              }}>
              Clear File
            </Button>
          </div>
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
          <Loading active small={true} withOverlay={false} />
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
              requests either a `yes` or `no` response.
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
            checkedItems.includes('multi-select') || !isFiltering
              ? 'component__container multi-select'
              : 'component__container component__container--hidden'
          }>
          <MultiSelect
            light
            placeholder="Filter"
            label="MultiSelect Label"
            items={[
              {
                id: 'item-1',
                text: 'Item 1',
              },
              {
                id: 'item-2',
                text: 'Item 2',
              },
              {
                id: 'item-3',
                text: 'Item 3',
              },
              {
                id: 'item-4',
                text: 'Item 4',
              },
            ]}
            itemToString={item => (item ? item.text : '')}
          />
          <div className="white-bg">
            <MultiSelect
              placeholder="Filter"
              label="MultiSelect Label"
              items={[
                {
                  id: 'item-1',
                  text: 'Item 1',
                },
                {
                  id: 'item-2',
                  text: 'Item 2',
                },
                {
                  id: 'item-3',
                  text: 'Item 3',
                },
                {
                  id: 'item-4',
                  text: 'Item 4',
                },
              ]}
              itemToString={item => (item ? item.text : '')}
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('toast-notification') || !isFiltering
              ? 'component__container component__container--notification'
              : 'component__container component__container--notification component__container--hidden'
          }>
          <ToastNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            caption="Time stamp [00:00:00]"
            kind="error"
          />
          <ToastNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            caption="Time stamp [00:00:00]"
            kind="info"
          />
          <ToastNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            caption="Time stamp [00:00:00]"
            kind="success"
          />
          <ToastNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            caption="Time stamp [00:00:00]"
            kind="warning"
          />
        </div>

        <div
          className={
            checkedItems.includes('inline-notification') || !isFiltering
              ? 'component__container component__container--notification'
              : 'component__container component__container--notification component__container--hidden'
          }>
          <InlineNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            kind="error"
          />
          <InlineNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            kind="info"
          />
          <InlineNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            kind="success"
          />
          <InlineNotification
            title="Notification title"
            subtitle="Subtitle text goes here."
            kind="warning"
          />
        </div>

        <div
          className={
            checkedItems.includes('number-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <NumberInput
            light
            id="number-input-100"
            label="Number Input label"
            min={0}
            max={100}
            value={50}
            step={10}
          />
          <div className="white-bg">
            <NumberInput
              id="number-input-101"
              label="Number Input label"
              min={0}
              max={100}
              value={50}
              step={10}
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('overflow-menu') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <OverflowMenu>
            <OverflowMenuItem itemText="Option 1" primaryFocus={true} />
            <OverflowMenuItem itemText="Option 2" />
            <OverflowMenuItem itemText="Option 3" />
            <OverflowMenuItem itemText="Option 4" />
            <OverflowMenuItem itemText="Danger option" hasDivider isDelete />
          </OverflowMenu>
        </div>

        <div
          className={
            checkedItems.includes('pagination') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <PaginationV2 pageSizes={[10, 20, 30, 40, 50]} totalItems={103} />
        </div>

        <div
          className={
            checkedItems.includes('progress-indicator') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ProgressIndicator currentIndex={3}>
            <ProgressStep
              label="First step"
              description="Step 1: Getting Started with Node.js"
            />
            <ProgressStep
              label="Second step"
              description="Step 2: Getting Started with Node.js"
            />
            <ProgressStep
              label="Third step"
              description="Step 3: Getting Started with Node.js"
            />
            <ProgressStep
              label="Fourth step"
              description="Step 4: Getting Started with Node.js"
            />
            <ProgressStep
              label="Fifth step"
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
          <FormGroup legendText="Radio Button heading">
            <RadioButtonGroup
              name="radio-button-group"
              defaultSelected="default-selected"
              legend="Group Legend">
              <RadioButton
                value="standard"
                id="radio-1"
                labelText="Standard Radio Button label"
              />
              <RadioButton
                value="default-selected"
                labelText="Default selected Radio Button"
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
              ? 'component__container search'
              : 'component__container component__container--hidden'
          }>
          <Search
            light
            className="some-class"
            id="search-1"
            labelText="Search"
            placeHolderText="Search"
          />
          <div className="white-bg">
            <Search
              className="some-class"
              id="search-1"
              labelText="Search"
              placeHolderText="Search"
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('select') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <Select light id="select-1" defaultValue="placeholder-item">
            <SelectItem
              disabled
              hidden
              value="placeholder-item"
              text="Choose an option"
            />
            <SelectItemGroup label="Category 1">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </SelectItemGroup>
            <SelectItemGroup label="Category 2">
              <SelectItem value="option-3" text="Option 3" />
              <SelectItem value="option-4" text="Option 4" />
            </SelectItemGroup>
          </Select>
          <div className="white-bg">
            <Select id="select-10" defaultValue="placeholder-item">
              <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text="Choose an option"
              />
              <SelectItemGroup label="Category 1">
                <SelectItem value="option-1" text="Option 1" />
                <SelectItem value="option-2" text="Option 2" />
              </SelectItemGroup>
              <SelectItemGroup label="Category 2">
                <SelectItem value="option-3" text="Option 3" />
                <SelectItem value="option-4" text="Option 4" />
              </SelectItemGroup>
            </Select>
          </div>
        </div>

        <div
          className={
            checkedItems.includes('slider') || !isFiltering
              ? 'component__container slider'
              : 'component__container component__container--hidden'
          }>
          <Slider
            light
            id="slider"
            value={50}
            min={0}
            max={100}
            step={1}
            labelText="Slider Label"
          />

          <div className="white-bg">
            <Slider
              id="slider-2"
              value={50}
              min={0}
              max={100}
              step={1}
              labelText="Slider Label"
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('structured-list') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <StructuredListWrapper selection border>
            <StructuredListHead>
              <StructuredListRow head>
                <StructuredListCell head>{''}</StructuredListCell>
                <StructuredListCell head>ColumnA</StructuredListCell>
                <StructuredListCell head>ColumnB</StructuredListCell>
                <StructuredListCell head>ColumnC</StructuredListCell>
              </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
              <StructuredListRow label htmlFor="row-1">
                <StructuredListInput
                  id="row-1"
                  value="row-1"
                  title="row-1"
                  name="row-1"
                  defaultChecked
                />
                <StructuredListCell>
                  <CheckmarkFilled16
                    className="bx--structured-list-svg"
                    aria-label="select an option"
                  />
                </StructuredListCell>
                <StructuredListCell>Row 1</StructuredListCell>
                <StructuredListCell>Row 1</StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dui magna, finibus id tortor sed, aliquet bibendum augue.
                  Aenean posuere sem vel euismod dignissim. Nulla ut cursus
                  dolor. Pellentesque vulputate nisl a porttitor interdum.
                </StructuredListCell>
              </StructuredListRow>
              <StructuredListRow label htmlFor="row-2">
                <StructuredListInput
                  id="row-2"
                  value="row-2"
                  title="row-2"
                  name="row-1"
                />
                <StructuredListCell>
                  <CheckmarkFilled16
                    className="bx--structured-list-svg"
                    aria-label="select an option"
                  />
                </StructuredListCell>
                <StructuredListCell>Row 2</StructuredListCell>
                <StructuredListCell>Row 2</StructuredListCell>
                <StructuredListCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dui magna, finibus id tortor sed, aliquet bibendum augue.
                  Aenean posuere sem vel euismod dignissim. Nulla ut cursus
                  dolor. Pellentesque vulputate nisl a porttitor interdum.
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
            <Tab label="Tab label 1">
              <div className="some-content">
                Content for first tab goes here.
              </div>
            </Tab>
            <Tab label="Tab label 2">
              <div className="some-content">
                Content for second tab goes here.
              </div>
            </Tab>
            <Tab label="Tab label 3">
              <div className="some-content">
                Content for third tab goes here.
              </div>
            </Tab>
            <Tab label="Tab label 4">
              <div className="some-content">
                Content for fourth tab goes here.
              </div>
            </Tab>
          </Tabs>
        </div>

        <div
          className={
            checkedItems.includes('textarea') || !isFiltering
              ? 'component__container textarea'
              : 'component__container component__container--hidden'
          }>
          <TextArea
            light
            cols={50}
            rows={4}
            labelText="Text Area label"
            placeholder="Placeholder text"
          />
          <div className="white-bg">
            <TextArea
              cols={50}
              rows={4}
              labelText="Text Area label"
              placeholder="Placeholder text"
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('text-input') || !isFiltering
              ? 'component__container text-input'
              : 'component__container component__container--hidden'
          }>
          <TextInput
            light
            id="text-input-7"
            labelText="Text Input label"
            placeholder="Placeholder text"
          />
          <div className="white-bg">
            <TextInput
              id="text-input-78"
              labelText="Text Input label"
              placeholder="Placeholder text"
            />
          </div>
        </div>

        <div
          className={
            checkedItems.includes('tile') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <TileGroup
            name="tile-group"
            defaultSelected="default-selected"
            legend="Selectable Tile Group">
            <RadioTile value="standard" id="tile-1">
              Selectable Tile
            </RadioTile>
            <RadioTile value="default-selected" id="tile-2">
              Selectable Tile
            </RadioTile>
            <RadioTile value="selected" id="tile-3">
              Selectable Tile
            </RadioTile>
          </TileGroup>
        </div>

        <div
          className={
            checkedItems.includes('time-picker') || !isFiltering
              ? 'component__container time-picker'
              : 'component__container component__container--hidden'
          }>
          <TimePicker light id="time-picker" labelText="Select a time">
            <TimePickerSelect
              id="time-picker-select-1"
              labelText="Choose AM or PM">
              <SelectItem value="AM" text="AM" />
              <SelectItem value="PM" text="PM" />
            </TimePickerSelect>
            <TimePickerSelect
              id="time-picker-select-2"
              labelText="Choose a timezone">
              <SelectItem value="Timezone 1" text="Timezone 1" />
              <SelectItem value="Timezone 2" text="Timezone 2" />
            </TimePickerSelect>
          </TimePicker>
          <div className="white-bg">
            <TimePicker id="time-picker-23" labelText="Select a time">
              <TimePickerSelect
                id="time-picker-select-6"
                labelText="Choose AM or PM">
                <SelectItem value="AM" text="AM" />
                <SelectItem value="PM" text="PM" />
              </TimePickerSelect>
              <TimePickerSelect
                id="time-picker-select-87"
                labelText="Choose a timezone">
                <SelectItem value="Timezone 1" text="Timezone 1" />
                <SelectItem value="Timezone 2" text="Timezone 2" />
              </TimePickerSelect>
            </TimePicker>
          </div>
        </div>

        <div
          className={
            checkedItems.includes('toggle') || !isFiltering
              ? 'component__container component__container--toggle'
              : 'component__container component__container--toggle component__container--hidden'
          }>
          <Toggle id="toggle-1" />
          <ToggleSmall id="toggle-2" ariaLabel="Small Toggle" />
        </div>

        <div
          className={
            checkedItems.includes('tooltip') || !isFiltering
              ? 'component__container component__container--tooltip'
              : 'component__container component__container--hidden'
          }>
          <TooltipDefinition tooltipText="Brief description of the dotted, underlined word above.">
            Definition Tooltip
          </TooltipDefinition>
          <Tooltip triggerText="Tooltip label">
            <p className="bx--tooltip__label">Tooltip subtitle</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaeca cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Tooltip>
          <TooltipIcon tooltipText="Filter">
            <svg width="16" height="12" viewBox="0 0 16 12">
              <g fillRule="nonzero">
                <path d="M8.05 2a2.5 2.5 0 0 1 4.9 0H16v1h-3.05a2.5 2.5 0 0 1-4.9 0H0V2h8.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3.05 9a2.5 2.5 0 0 1 4.9 0H16v1H7.95a2.5 2.5 0 0 1-4.9 0H0V9h3.05zm2.45 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </g>
            </svg>
          </TooltipIcon>
        </div>
      </div>
    );
  }
}
