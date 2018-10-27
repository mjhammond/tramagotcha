import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import LoggedIn from "./Components/LoggedIn";

class App extends Component {
    state = {
        loggedIn: true
    };

  render() {
    return (
      <section className="main">
        {!this.state.loggedIn ? <Login /> : <LoggedIn />};
      </section>
    );
  }
}

export default App;
