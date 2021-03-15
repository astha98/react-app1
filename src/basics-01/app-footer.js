import React, { Component } from 'react';
import './app-footer.css';    // Import the CSS

class AppFooter extends Component {
    render() {
        console.log(this.props);    // Props 

        return (
            <div class="app-footer">
                <h3>This is the footer</h3>
                <p>CopyRight 2021, {this.props.company} in {this.props.country} </p>
                <p>CopyRight 2021, {this.props.company} in {this.props.website} </p>
                <p>CopyRight 2021, {this.props.company} in {this.props.website} in {this.props.year}</p>


            </div>
        );
    }
}

export default AppFooter;