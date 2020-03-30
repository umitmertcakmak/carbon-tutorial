// import React from 'react';
//
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   Button,
//   Tabs,
//   Tab,
// } from 'carbon-components-react';
//
// import { DatePicker, DatePickerInput, ComboBox, FormGroup, TextArea } from 'carbon-components-react';
//
//
// import { TestComponent } from '../../components/TestComponent';
// import { ApiCaller } from '../../components/ApiCallerClassTestComponent';
//
// import { InfoSection, InfoCard } from '../../components/Info';
// import Globe32 from '@carbon/icons-react/lib/globe/32';
// import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
// import Application32 from '@carbon/icons-react/lib/application/32';
//
// const props = {
//   tabs: {
//     selected: 0,
//     triggerHref: '#',
//     role: 'navigation',
//   },
//   tab: {
//     href: '#',
//     role: 'presentation',
//     tabIndex: 0,
//   },
// };
//
// const items = [
//   {
//     id: 'option-1',
//     text: 'Option 1',
//   },
//   {
//     id: 'option-2',
//     text: 'Option 2',
//   },
//   {
//     id: 'option-3',
//     text: 'Option 3',
//   },
//   {
//     id: 'option-4',
//     text: 'Option 4',
//   }
// ];
//
// const ClaimAssessment = () => {
//   return (
//     <div className="bx--grid bx--grid--full-width landing-page">
//
//       <div className="bx--row claim-assessment__padding" />
//
//
//       <div className="bx--row claim-assessment__form-element">
//         <div className="bx--col-lg-4">
//           <div
//             className="bx--form-item bx--text-input-wrapper">
//             <label htmlFor="text-input-3" className="bx--label">Customer policy number:</label>
//             <div className="bx--text-input__field-wrapper">
//               <input id="text-input-3" type="text" className="bx--text-input" placeholder="Placeholder text" />
//             </div>
//           </div>
//         </div>
//
//         <div className="bx--col-lg-4">
//           <div
//             className="bx--form-item bx--text-input-wrapper">
//
//             <DatePicker dateFormat="m/d/Y" datePickerType="single">
//               <DatePickerInput
//                 id="date-picker-calendar-id"
//                 placeholder="mm/dd/yyyy"
//                 labelText="Incident date"
//                 type="text"
//               />
//             </DatePicker>
//
//           </div>
//         </div>
//       </div>
//
//       <div className="bx--row claim-assessment__form-element">
//         <div className="bx--col-lg-4">
//
//           <ComboBox
//             ariaLabel="ComboBox"
//             id="carbon-combobox-example"
//             items={items}
//             label="ComboBox menu options"
//             titleText="What item was being claimed?"
//           />
//
//         </div>
//
//         <div className="bx--col-lg-4">
//           <div
//             className="bx--form-item bx--text-input-wrapper">
//             <label htmlFor="text-input-3" className="bx--label">Type of claim:</label>
//             <div className="bx--text-input__field-wrapper">
//               <input id="text-input-3" type="text" className="bx--text-input" placeholder="Placeholder text" />
//             </div>
//           </div>
//         </div>
//       </div>
//
//       <div className="bx--row claim-assessment__form-element">
//         <div className="bx--col-lg-4">
//           <div
//             className="bx--form-item bx--text-input-wrapper">
//             <label htmlFor="text-input-3" className="bx--label">What is the estimated value of the item?</label>
//             <div className="bx--text-input__field-wrapper">
//               <input id="text-input-3" type="text" className="bx--text-input" placeholder="Placeholder text" />
//             </div>
//           </div>
//         </div>
//
//         <div className="bx--col-lg-4">
//           <div
//             className="bx--form-item bx--text-input-wrapper">
//
//             <FormGroup>
//               <TextArea
//                 cols={50}
//                 id="test2"
//                 invalidText="A valid value is required"
//                 labelText="How did incident occur?"
//                 placeholder="Placeholder"
//                 rows={4}
//               />
//             </FormGroup>
//
//           </div>
//         </div>
//       </div>
//
//       <div className="bx--row claim-assessment__padding" />
//
//       {/*<InfoSection heading="The Principles" className="landing-page__r3">*/}
//       {/*  <InfoCard*/}
//       {/*    heading="Carbon is Open"*/}
//       {/*    body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."*/}
//       {/*    icon={<PersonFavorite32 />}*/}
//       {/*  />*/}
//       {/*  <InfoCard*/}
//       {/*    heading="Carbon is Modular"*/}
//       {/*    body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."*/}
//       {/*    icon={<Application32 />}*/}
//       {/*  />*/}
//       {/*  <InfoCard*/}
//       {/*    heading="Carbon is Consistent"*/}
//       {/*    body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."*/}
//       {/*    icon={<Globe32 />}*/}
//       {/*  />*/}
//       {/*</InfoSection>*/}
//     </div>
//   );
// };
//
// export default ClaimAssessment;
//
//
//
// import React, {Component} from 'react';
//
//
// import { DatePicker, DatePickerInput, ComboBox, MultiSelect, Form, FormGroup, TextArea, TextInput, Button } from 'carbon-components-react';
//
// import Select from 'react-select';
//
// import { Tile } from 'carbon-components-react';
//
// import { HBarChartComponent } from '../../components/ChartComponents';
//
//
//
//
// const props = {
//   tabs: {
//     selected: 0,
//     triggerHref: '#',
//     role: 'navigation',
//   },
//   tab: {
//     href: '#',
//     role: 'presentation',
//     tabIndex: 0,
//   },
// };
//
// const claimeditems = [
//   {
//     id: 'option-1',
//     label: 'Option 1',
//   },
//   {
//     id: 'option-2',
//     label: 'Option 2',
//   },
//   {
//     id: 'option-3',
//     label: 'Option 3',
//   },
//   {
//     id: 'option-4',
//     label: 'Option 4',
//   }
// ];
//
// const items =['Other', 'Luggage', 'Clothing', 'Cameras', 'Jewelry', 'Locks', 'Computer', 'Cosmetics', 'Eyeglasses', 'Bluetooth', 'Cell', 'Travel', 'MP3', 'Baggage/Cases/Purses', 'Watches', 'Computer/Accessories', 'DVD/CD', 'Sporting', 'Personal', 'Handbags', 'GPS', 'Toys', 'Alcoholic', 'Bags', 'Stereo', 'Baby', 'Musical', 'Books', 'Tools', 'Glassware', 'Pottery', 'Plasticware', 'Dishes', 'PDA', 'Musical/Instruments', 'Pictures', 'Bicycle/Equipment', 'Video', 'Game/Equipment', 'Knives', 'Pans', 'Kitchen', 'Home', 'Cell/Accessories', 'Paintings', 'Audio', 'Dental', 'Household', 'Photos/Accessories', 'Batteries', 'Camping'];
//
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];
//
//
// class CustomerInfo extends React.Component {
//
//   render() {
//     return (
//       <div>
//
//         <h2 className="landing-page__subheading">
//           Customer Information
//         </h2>
//
//         <p>Name: {this.props.name} </p>
//
//         <p>Service Address: {this.props.serviceAddress}</p>
//
//         <p>Primary Phone: {this.props.primaryPhone}</p>
//
//       </div>
//     )
//   }
// }
//
//
// class ClaimAssessment extends Component {
//
//   constructor() {
//     super();
//     this.state = {
//       policynumber: '',
//       pickeddate: '',
//       claimeditems: '',
//       claimtype: '',
//       estimatedvalue: '',
//       incidentdetails: '',
//       selectedOption: null,
//       customerInfo: {
//         name: 'neils',
//         serviceAddress: 'address line',
//         primaryPhone: '122522'}
//     };
//   }
//
//   onChange = (e) => {
//     /*
//       Because we named the inputs to match their
//       corresponding values in state, it's
//       super easy to update the state
//     */
//     this.setState({ [e.target.name]: e.target.value },
//       function () {
//         console.log(this.state);
//       }
//     );
//   }
//
//   onSubmit = (e) => {
//     e.preventDefault();
//     // get our form data out of state
//     const { policynumber, lname, email, textarea, pickeddate, claimeditems, claimtype, estimatedvalue, incidentdetails, selectedOption } = this.state;
//
//     // axios.post('/', { fname, lname, email })
//     //   .then((result) => {
//     //     //access the results here....
//     //   });
//     console.log(this.state);
//   }
//
//   render() {
//     const { policynumber, lname, email, textarea, pickeddate, claimeditems, claimtype, estimatedvalue, incidentdetails, selectedOption} = this.state;
//
//     return (
//
//       <div className="bx--grid bx--grid--full-width landing-page">
//
//         <div className="bx--row claim-assessment__padding" />
//
//         <div className="bx--row claim-assessment__form-element">
//           <div className="bx--col-lg-4">
//           </div>
//           <div className="bx--col-lg-8">
//
//             <h1 className="landing-page__heading">
//               Insurance Claim Assessment
//             </h1>
//
//             <Form>
//
//               <FormGroup>
//                 <TextInput style={{ backgroundColor: "white"}}
//                            helperText="Policy number as in CRM system."
//                            id="test2"
//                            invalidText="Invalid error message."
//                            labelText="Customer policy number"
//                            placeholder={policynumber}
//                            name="policynumber"
//                            value={policynumber}
//                            onChange={this.onChange}
//                 />
//               </FormGroup>
//
//               <FormGroup>
//                 <DatePicker
//                   dateFormat="m/d/Y"
//                   datePickerType="single"
//                   name="pickeddate"
//                   value={pickeddate}
//                   onChange={date => this.setState( {pickeddate: date[0]}, function () {console.log(this.state);})}>
//                   <DatePickerInput style={{ backgroundColor: "white"}}
//                                    id="date-picker-calendar-id"
//                                    helperText="As indicated in application form"
//                                    placeholder="mm/dd/yyyy"
//                                    labelText="Incident date"
//                                    type="text"
//
//                   />
//                 </DatePicker>
//               </FormGroup>
//
//               <FormGroup>
//                 <Select class="bx--dropdown"
//                         value={selectedOption}
//                         onChange={item => this.setState( {selectedOption: item}, function () {console.log(this.state);})}
//                         options={options}
//                 />
//               </FormGroup>
//
//               <FormGroup>
//                 <TextInput style={{ backgroundColor: "white"}}
//                            id="claimtype"
//                            invalidText="Invalid error message."
//                            labelText="Type of claim"
//                            placeholder={claimtype}
//                            name="claimtype"
//                            value={claimtype}
//                            onChange={this.onChange}
//                 />
//               </FormGroup>
//
//               <FormGroup>
//                 <TextInput style={{ backgroundColor: "white"}}
//                            id="estimatedvalue"
//                            invalidText="Invalid error message."
//                            labelText="What is the estimated value of the item?"
//                            placeholder={estimatedvalue}
//                            name="estimatedvalue"
//                            value={estimatedvalue}
//                            onChange={this.onChange}
//                 />
//               </FormGroup>
//
//               <FormGroup>
//                 <TextArea style={{ backgroundColor: "white"}}
//                           cols={50}
//                           id="incidentdetails"
//                           invalidText="A valid value is required"
//                           labelText="How did incident occur?"
//                           placeholder="Incident details"
//                           rows={4}
//                           name="incidentdetails"
//                           value={incidentdetails}
//                           onChange={this.onChange}
//                 />
//               </FormGroup>
//
//               <Button
//                 kind="primary"
//                 tabIndex={0}
//                 type="submit"
//               >
//                 Submit
//               </Button>
//             </Form>
//
//
//           </div>
//         </div>
//
//         <div className="bx--row">
//           <div className="bx--col-lg-5">
//             <Tile>
//               <CustomerInfo
//                 name={this.state.customerInfo.name}
//                 serviceAddress={this.state.customerInfo.serviceAddress}
//                 primaryPhone={this.state.customerInfo.primaryPhone}
//               />
//             </Tile>
//           </div>
//         </div>
//
//       </div>
//
//
//
//
//     );
//   }
// }
//
// export default ClaimAssessment;
//
