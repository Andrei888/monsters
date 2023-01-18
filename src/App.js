import { Component } from "react";
import AppClass from "./app-class";
import AppFunctional from "./app-functional";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="app-item">
          <h1>Class Component</h1>
          <AppClass />
        </div>
        <div className="app-item">
          <h1>Functional Component</h1>
          <AppFunctional />
        </div>
      </div>
    );
  }
}

export default App;
