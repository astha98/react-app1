import React, { Component } from 'react'
import './app-content.css';

class AppContent extends Component {
    render() {
        console.log(this.props);    // Props 

        return (
            <div className="app-content">
                <h2>This is app-component</h2>
            </div>
        );
    }
}

export default AppContent;