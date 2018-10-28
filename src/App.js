import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './Components/Login';
import LoggedIn from './Components/LoggedIn';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, userID: null };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        const tramagotchaID = sessionStorage.getItem('tramagotchaID');
        if (tramagotchaID) {
            this.setState(() => ({
                loggedIn: true,
                userID: tramagotchaID
            }));
        }
    }

    handleLoginClick({ username, password }) {
        console.log(username, password);

        axios
            .get(
                `http://localhost:6006/login?username=${username}&password=${password}`
            )
            .then(res => {
                console.log(res);
                this.setState(() => ({
                    userID: res.data.userid,
                    loggedIn: true,
                }));
                sessionStorage.setItem('tramagotchaID', res.data.userid);
                return res;
            })
            //   .then(json => console.log(JSON.stringify(json)))
            .catch(console.error);
    }

    render() {
        return (
            <section className="main">
                {!this.state.loggedIn
                    ? <Login handleLoginClick={this.handleLoginClick} />
                    : <LoggedIn userID={this.state.userID} />}
                ;
            </section>
        );
    }
}

export default App;
