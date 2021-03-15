import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Stateless component to render button
const MyButton = ({ caption, handler }) => {
  console.log(" Caption ", caption);
  console.log(" Handeler ", handler);
  return (
    <button className="btn btn-secondary" onClick={handler}>
      {caption}
    </button>
  );
};

class App extends Component {
  /* Either do this, where we have to bind the function with this class
    constructor(){
        super();
        console.log("You are inside the constructor");

        this.btnHandler = this.btnHandler.bind(this);  // This will bind this event to this class
    }

    btnHandler(){
        console.log("You clicked", this);
    }
    */

  // Or, Bind it implicitly -- with the arrow function
  btnHandler = () => {
    console.log(" You clicked ", this);
  };

  // When you mutate the state variable, the render is implicitly called
  state = { num: 0 };

  // we cannot mutate the state variable directly -- 
  //this will not re-render the component
  /*
  increment = () => {this.state.num++;}
  decrement = () => { this.state.num--;}
  */

  // Using SetState()
  /*  increment = () => {
    this.setState({ num: this.state.num + 1 });
  };

  decrement = () => {
    this.setState({ num: this.state.num - 1 });
  }; */

  // One function that should increment or decrement
  fnIncrementDecrement = (val) => {
    this.setState({ num: this.state.num + val });
  };

  render() {
    return (
      <div className="container">
        <h3>This is the Component area of the Application</h3>

        <hr />
        <p> The value of state is {this.state.num}</p>
        <button className="btn btn-primary" onClick={this.btnHandler}>Button1</button>
        <button className="btn btn-secondary" onClick={this.btnHandler}>Button2</button>

        <hr />
        <button className="btn btn-danger" id="button1" onClick={this.increment}>Increment</button>
        <button className="btn btn-danger" id="button2" onClick={this.decrement}>Decrement</button>

        <hr />
        {/* Calling the function as an anonymous function to avoid undefined output,
        Single function that implements both the funtionalities */}
        <button className="btn btn-warning" onClick={() => {this.fnIncrementDecrement(1);}}>Increment</button>
        <button className="btn btn-warning" onClick={() => {this.fnIncrementDecrement(-1);}}>Decrement</button>

        <hr />
        <MyButton caption="INCREMENT" handler={() => {this.fnIncrementDecrement(1);}}/>
        <MyButton caption="DECREMENT" handler={() => {this.fnIncrementDecrement(-1);}}/>
      </div>
    );
  }
}

export default App;
