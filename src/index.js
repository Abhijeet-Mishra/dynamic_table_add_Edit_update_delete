import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableComponent from "./tablecomp";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableComponent />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
