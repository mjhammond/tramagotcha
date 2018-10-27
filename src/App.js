import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import LoggedIn from './Components/LoggedIn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: true };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState(() => ({ loggedIn: true }));
    }

    render() {
        return (
            <section className="main">
                {!this.state.loggedIn
                    ? <Login handleLoginClick={this.handleLoginClick} />
                    : <LoggedIn userID={4} />}
                ;
            </section>
        );
    }
}

export default App;
