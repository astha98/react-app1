// import React, { Component } from 'react'
// import "bootstrap/dist/css/bootstrap.css";
// import ContactCard from '../contact-app/contact-card';

// class Contact-App-07 extends Component {
//     state = { 
//         contacts: []
//      }

//      componentDidMount()
//      {
//          fetch("http://localhost:4000/contacts/")
//          .then(resp => resp.jspon())
//          .then( respJson => this.setState({contacts:respJson}));

//      }




//     render() {
//         return (
//             <div className="container">
//             <h1 className="alert alert-info">Fetching Data from Rest Server</h1>
//             <p> Number of Records {this.state.contacts.length}</p>
//             <div className="row">
//                 <div className="col">
//                     <ContactList contacts={this.state.contacts} />
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }

// export default Contact-App-07;