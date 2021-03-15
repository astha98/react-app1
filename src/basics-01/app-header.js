// either use div or fragmnet from {Fragment}
import React, { Component, Fragment } from 'react'

class AppHeader extends Component {
    render() {
        console.log(this.props);    // Props 

        return (
            <Fragment className="app-header">
                <h1> This is Header  </h1>
                <hr/>
                {/* On the HTML view */}
                Company-Name : {this.props.companyName} <br/>
                Developed-by : {this.props.createdBy}
            </Fragment>
        );
    }
}

export default AppHeader;