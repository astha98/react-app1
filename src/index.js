
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from './App-Basics';
// import App from './Apps/app-event-04';
// import App from "./Apps/App-Product";
// import App  from "./Apps/App-Life-Cycle-06"
import App from "./Apps/Contact-App";



//To render a React element into a root DOM node, pass both to ReactDOM.render()
// React elements are immutable. Once you create an element,
// you can’t change its children or attributes
ReactDOM.render(<App/>, document.getElementById("root"));
reportWebVitals();

console.log(" Just a simple log");

export default App;

