<<<<<<< HEAD
import React from "react";
import axios from "axios";
import "./loggedin.css";
import Header from "../Header";
import Tamagotchi from "../Tamagotchi";
import UserInfo from "../UserInfo";

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {}, items: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:6006/getUserDetails?ID=${this.props.userID}`)
      .then(res => {
        console.log(this);
        this.setState(() => ({
          userInfo: res.data.user,
          items: res.data.items
        }));
        return res;
      })
      .then(json => console.log(JSON.stringify(json)))
      .catch(console.error);
  }

  render() {
    const { userInfo, items } = this.state;
    return (
      <div className="loggedIn">
        <Header />
        {userInfo.PetId && <Tamagotchi id={userInfo.PetId} />}
        {userInfo && items && <UserInfo userInfo={userInfo} items={items} />}
      </div>
    );
  }
=======
import React from 'react';
import axios from 'axios';
import './loggedin.css';
import Header from '../Header';
import Tamagotchi from '../Tamagotchi';
import Geolocation from '../Geolocation';
import Display from '../Display';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { petID: 2, xp: 0, username: '' };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:6006/getUserDetails?ID=${this.props.userID}`)
            .then(res => {
                console.log(res);
                this.setState(() => ({
                    petID: res.data.user.PetId,
                    xp: res.data.user.currentXp,
                    username: res.data.user.username,
                }));
                return res;
            })
            .then(json => console.log(JSON.stringify(json)))
            .catch(console.error);
    }

    render() {
        return (
            <div className="login">
                <Header />
                <Geolocation userID={this.props.userID} />
                <Display text={'current XP'} value={this.state.xp} />
                <Display text={'username'} value={this.state.username} />
                <Tamagotchi id={this.state.petID} />
            </div>
        );
    }
>>>>>>> 6e4b7476114d731875e44c16bbd636e9f2748897
}

export default LoggedIn;
