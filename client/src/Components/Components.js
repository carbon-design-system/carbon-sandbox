import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  CodeSnippet,
  ComboBox,
  ContentSwitcher,
  DatePicker,
  DatePickerInput,
  DropdownV2,
  FileUploader,
  Footer,
  FormGroup,
  Icon,
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
  ToastNotification,
  Toolbar,
  ToolbarItem,
  ToolbarTitle,
  ToolbarOption,
  ToolbarDivider,
  Toggle,
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
          <Button small>Small primary button</Button>
          <Button small kind="secondary">Small secondary Button</Button>
          <Button disabled>Disabled button</Button>
          <Button
            kind="ghost"
            className="some-class"
            icon="add--solid"
            iconDescription="Add">
            Ghost button
          </Button>
          <Button kind="danger">Danger button</Button>
          <Button kind="danger--primary">Danger Primary button</Button>
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
            <Checkbox
              id="checkbox-label-1"
              labelText="Checkbox label 1"
            />
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
          <CodeSnippet type="inline" feedback="Feedback Enabled 👍" copyLabel="Copy Code">
            {'node -v'}
          </CodeSnippet>
          <CodeSnippet type="inline" light feedback="Feedback Enabled 👍" copyLabel="Copy Code">
            {'node -v'}
          </CodeSnippet>
          <CodeSnippet type="single" feedback="Feedback Enabled 👍" copyLabel="Copy Code">
            {
              'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!'
            }
          </CodeSnippet>

          <CodeSnippet type="multi" feedback="Feedback Enabled 👍" copyLabel="Copy Code">
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
          />
        </div>

        <div
          className={
            checkedItems.includes('content-switcher') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>
          <ContentSwitcher>
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
          <DatePicker
            light
            datePickerType="range"
            dateFormat="m/d/Y">
            <DatePickerInput
              labelText="From Date" placeholder="mm/dd/yyyy" locale="en" id="date-picker-input-id" />
            <DatePickerInput
              labelText="To Date"
              placeholder="mm/dd/yyyy"
              id="date-picker-input-id-2"
            />
          </DatePicker>
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
          <Loading active="true" small={true} withOverlay={false} />
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
            checkedItems.includes('multi-select') || !isFiltering
              ? 'component__container'
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
          <NumberInput label="Number Input label" min={0} max={100} value={50} step={10} />
        </div>

        <div
          className={
            checkedItems.includes('overflow-menu') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('pagination') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('progress-indicator') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('radio-button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('search') || !isFiltering
              ? 'component__container component__container--search'
              : 'component__container component__container--search component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('select') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('slider') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('structured-list') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('tabs') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('tag') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('textarea') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('text-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('time-picker') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('toggle') || !isFiltering
              ? 'component__container component__container--toggle'
              : 'component__container component__container--toggle component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('toolbar') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('tooltip') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>
      </div>
    );
  }
}
