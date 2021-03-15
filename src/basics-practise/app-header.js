import React, { Component } from 'react';
import './app-header.css';

class AppHeader extends Component {

    render() {
        return (
            <div className="app-header">
                <div className="button">
                    <button type="submit" id="submit">Sign up</button>
                </div>
            </div>
        );
    }
}

export default AppHeader;