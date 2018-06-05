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

        </div>

        <div
          className={
            checkedItems.includes('breadcrumb') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('button') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('checkbox') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('code-snippet') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('content-switcher') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

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

        </div>

        <div
          className={
            checkedItems.includes('dropdown') || !isFiltering
              ? 'component__container dropdown'
              : 'component__container component__container--hidden'
          }>

        </div>

        <div
          className={
            checkedItems.includes('file-uploader') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

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

        </div>

        <div
          className={
            checkedItems.includes('number-input') || !isFiltering
              ? 'component__container'
              : 'component__container component__container--hidden'
          }>

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
