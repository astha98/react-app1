import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ContactCard from "../contact-app/contact-card";

class App extends Component {
    render() {

        const contacts = [
            {
                "id":1,
                "name" :"Kumar",
                "gender" :"male",
                "email":"naveen@probits.in",
                "phone":"9900524255",
                "picture" :"https://randomuser.me/api/portraits/men/30.jpg"
            },
            {
                "id":2,
                "name" :"Charan",
                "gender" :"male",
                "email":"Charan@probits.in",
                "phone":"9900000005",
                "picture" :"https://randomuser.me/api/portraits/men/30.jpg"
            },
            {
                "id":3,
                "name" :"Monika",
                "gender" :"Female",
                "email":"Monika@probits.in",
                "phone":"9900978787",
                "picture" :"https://randomuser.me/api/portraits/women/30.jpg"
            }
        ];

        const contactList = contacts.map(c => <ContactCard contact={c} key={c.id}/>)
        return (
            <div className="container">
                <h1 className="alert alert-info">Showing Array of Contact Card</h1>
                <ContactCard contact={contacts[0]}/>
            </div>
        );
    }
}

export default App;