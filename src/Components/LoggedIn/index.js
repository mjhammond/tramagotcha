import React from "react";
import axios from 'axios';
import "./loggedin.css";
import Header from "../Header";
import Tamagotchi from "../Tamagotchi";

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { petID: 2 };
    }

    componentDidMount() {
        axios.get(`http://localhost:6006/getUserDetails?ID=${this.props.userID}`).then(res => {
            console.log(res);
            this.setState(() => ({ petID: res.data.user.PetId }));
            return res;
        }).then(json => console.log(JSON.stringify(json)))
        .catch(console.error);
    }

    render() {
        return (
            <div className="login">
              <Header />
              <Tamagotchi id={this.state.petID} />
            </div>
        );
    }
};

export default LoggedIn;
