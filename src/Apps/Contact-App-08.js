import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import ContactCard from '../contact-app/contact-card';
import ContactList from '../contact-app/contact-list'

class ContactApp extends Component {
    state = { 
        contacts: []
     }

     async componentDidMount()
     {
         let resp = await fetch("http://localhost:4000/contacts/") // Getting data from end-point
         let contacts = await resp.json();
         this.setState({contacts});


        //  .then(resp => resp.json())
        //  .then( respJson => this.setState({contacts: respJson}));

     }

    render() {
        return (
            <div className="container">
            <h1 className="alert alert-info">Fetching Data from Rest Server</h1>
            <p> Number of Records {this.state.contacts.length}</p>
            <div className="row">
                <div className="col">
                    <ContactList contacts={this.state.contacts} />
                </div>
            </div>
            </div>
        );
    }
}

export default ContactApp;