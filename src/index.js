
// 1) Create an AddressLabel component that accepts a person object as a prop, and renders their name and address like this:
//
// Full Name
// 123 My St.
// Hialeah, FL 33164
// 2) Create an Envelope component that receives a toPerson and fromPerson as props and uses the AddressLabel
//  from challenge 1 to display the return address and the recipient address. Make sure to include a Stamp as well!!

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

// function FullNAme(){
//   return(
//     <span className="FullNAme">
//     <span className="FirstName">Yastrenky </span>
//      <span className="LastaName">Bravo</span>
//
//     </span>
//   );
//
// }
// function Adderss(){
//   return(
//     <span className="TheAddress">
//     <span className="Street">5300 SW 3rd St</span>
//     <div>
//      <span className="City">Miami, </span>
//       <span className="State">Florida  </span>
//        <span className="ZipCode">33134</span>
// </div>
//     </span>
//   );
// }
function AddressLabel({data, className}){
  const {firstname, lastname, street, city, state, zipcode} = data;
  return(
<div className={className}>
 <div className="FullName">
  <span className="firstname">{firstname} </span>
  <span className="LastaName">{lastname}</span>
 </div>
 <div className="TheAddress">
  <span className="street">{street} </span>
  <br/>
  <span className="city">{city}, </span>
  <span className="state">{state} </span>
  <span className="zipcode">{zipcode}</span>
 </div>
</div>
);
}
AddressLabel.PropTypes = {
data: PropTypes.shape({
firstname:PropTypes.string.isRequired,
lastname:PropTypes.string.isRequired,
street:PropTypes.string.isRequired,
city:PropTypes.string.isRequired,
state:PropTypes.string.isRequired,
zipcode:PropTypes.string.isRequired
}).isRequired
}
 const Person={
   firstname : 'Yastrenky',
   lastname: 'Bravo',
   street : '5300 SW 3rd ST',
   city : 'Miami',
   state : 'FL',
   zipcode:'33134'
 }

 const toPerson={
   firstname : 'Yastrenky',
   lastname: 'Bravo',
   street : '5300 SW 3rd ST',
   city : 'Miami',
   state : 'FL',
   zipcode:'33134'
 }
 const fromPerson={
   firstname : 'Pepe',
   lastname: 'Bravo',
   street : '5300 SW 3rd ST',
   city : 'Miami',
   state : 'FL',
   zipcode:'33134'
 }
function Envelope({toPerson , fromPerson}){
  console.log(toPerson);
return(
  <div className='envelope'>
    <h5>From:</h5><AddressLabel data={fromPerson} className='from-person'/>
    <h5 >To:</h5><AddressLabel data={toPerson} className='to-person'/>

  </div>
)
}
ReactDOM.render(<Envelope toPerson={toPerson} fromPerson={fromPerson} />, document.getElementById('root'));
