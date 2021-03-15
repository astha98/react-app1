import React, { Component } from 'react'

import AppHeader from '../basics-01/app-header';
import AppContent from '../basics-01/app-content';
import AppFooter from '../basics-01/app-footer';


class App extends Component {
    render() {
        console.log(this.props); // Props 

        const footerProps = {
            company:"Sapient",
            country:"India"
        }

        return (
            <div className="app">
                <AppHeader companyName="Sapient,India" createdBy="Astha"></AppHeader>  
                <h1> This is the App-02 File </h1>
                <AppContent></AppContent>
                <AppFooter company={footerProps.company} country={footerProps.country}></AppFooter>        
            </div>
            
        );
    }
}

export default App;