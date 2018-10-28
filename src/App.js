import React, { Component } from "react";
import "./app.css";
import Login from "./Components/Login";
import LoggedIn from "./Components/LoggedIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: true, userID: null };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState(() => ({ loggedIn: true }));
  }

  render() {
    return (
      <section className="main">
        {!this.state.loggedIn ? (
          <Login handleLoginClick={this.handleLoginClick} />
        ) : (
          <LoggedIn userID={1} />
        )}
        ;
      </section>
    );
  }
}

export default App;
