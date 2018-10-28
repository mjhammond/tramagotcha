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

<<<<<<< HEAD
  render() {
    return (
      <section className="main">
        {!this.state.loggedIn ? (
          <Login handleLoginClick={this.handleLoginClick} />
        ) : (
          <LoggedIn userID={4} />
        )}
        ;
      </section>
    );
  }
=======
    render() {
        return (
            <section className="main">
                {!this.state.loggedIn
                    ? <Login handleLoginClick={this.handleLoginClick} />
                    : <LoggedIn userID={1} />}
                ;
            </section>
        );
    }
>>>>>>> 6e4b7476114d731875e44c16bbd636e9f2748897
}

export default App;
