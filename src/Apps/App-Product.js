import React, { Component } from "react";
// import ProductForm from "../ctrl-unctrl-component/prod-form";

import ProductForm from "../ctrl-unctrl-component/prod-form-ctrl";


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> Using refs - uncontrolled components</h1>
        <hr />
        <div className="row">
          <div className="col">
            <ProductForm></ProductForm>
          </div>
          <div className="col">For showing List of Products</div>
        </div>
      </div>
    );
  }
}

export default App;
