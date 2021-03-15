import React, { Component } from "react";

class App extends Component {
  render() {
    const msg = "Hello World !!";
    const name = "Sapient, India";

    return (
      <div>
        <h1>{msg} This is the App Component</h1>
        <p>Just Another Paragraph</p>
        <p> Compnay Name : {name} </p>
      </div>
    );
  }
}

export default App;
