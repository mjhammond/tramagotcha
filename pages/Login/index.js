import React from "react";
import { Route } from "react-router";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";

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
      <form className="" noValidate autoComplete="off">
        <Input
          id="standard-name"
          name="username"
          value={this.state.username}
          className="username"
          placeholder="username"
          disableUnderline
          onChange={this.handleInput("username")}
        />
      </form>
    );
  }
}

export default Login;
