import React, { Component } from "react";
import "./app.css";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <section className="main">
        <Login />;
      </section>
    );
  }
}

export default App;
