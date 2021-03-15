import React, { Component } from "react";

import AppHeader from "../basics-practise/app-header";
import AppBanner from "../basics-practise/app-banner";
import AppSection from "../basics-practise/app-section";
import AppFooter from "../basics-practise/app-footer";

class App extends Component {
  render() {
    console.log(this.props); // Props

    return (
      <div className="app">
        <AppHeader></AppHeader>
        <AppBanner></AppBanner>
        <AppSection></AppSection>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default App;
