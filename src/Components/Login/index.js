import React from "react";
import "./login.css";
import Header from "../Header";
import { Link } from "react-router";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <Header />
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="field">
                <label className="label" id="username">
                  Username
                </label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    onChange={this.handleInput("username")}
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  onChange={this.handleInput("password")}
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
              <button className="button is-success" id="login-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
