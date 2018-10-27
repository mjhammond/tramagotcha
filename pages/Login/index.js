import React from "react";
import { Route } from "react-router";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing.unit * 2,
    },
});

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
    const classes = this.props.classes;
    return (
    <Grid
        className={classes.root}
        container
        spacing={16}
        direction="row"
        justify="center"
        alignItems="center"
    >
      <form className="" noValidate autoComplete="off">
        <Grid item xs={12}>
            <Input
            id="standard-name"
            name="username"
            value={this.state.username}
            className="username"
            placeholder="username"
            disableUnderline
            onChange={this.handleInput("username")}
            />
        </Grid>
        <Grid item xs={12}>
            <Input
            id="standard-name"
            name="password"
            value={this.state.password}
            className="password"
            placeholder="password"
            disableUnderline
            onChange={this.handleInput("password")}
            />
        </Grid>
      </form>
    </Grid>
    );
  }
}

export default withStyles(styles)(Login);
