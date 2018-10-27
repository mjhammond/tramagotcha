import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login";
import Tamagotchi from "./Components/Tamagotchi";

class App extends Component {
    state = {
        loggedIn: false
    };

  render() {
    return (
      <section className="main">
        {!this.state.loggedIn ? <Login /> : <Tamagotchi id={1} />};
      </section>
    );
  }
}

export default App;
