import React, { Component } from "react";

class CounterApp extends Component {
  state = { count: 1 }; // State Variable - Whenever you call a state variable, render() is called implicitly
  num = 1; // NOT a State Variable -- needs to rendered/ re-rendered by forceUpdate() method

  // Mounting Stage
  constructor() {
    super();
    console.log("CounterApp-Constructor");
  }

  render() {
    console.log("CounterApp.render called()");
    return (
      <div className="container">
        <hr />
        {/* Props bing passed from the parent component */}
        <h3 className="alert alert-danger">{this.props.title}</h3>
        <p> Value of Counter {this.state.count}</p>

        {/* When you mutate state, render() is implicitly called
                But, Otherwise, you have to call forceUpdate() */}
        <p> Value of Num {this.num}</p>

        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            this.num++;
            console.log(" Num Value ", this.num);
            this.forceUpdate();
          }}
        >
          Increment Num
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log(" CounterApp.componentDidMount()...");
  }

  componentWillUnmount() {
    console.log(" CounterApp.componentWillUnmount()...");
  }

  // Increment the variable, render() is called and Update() is called
  componentDidUpdate() {
    console.log("CounterApp.componentDidUpdate() called....");
  }
}

export default CounterApp;
