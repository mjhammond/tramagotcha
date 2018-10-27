import React from "react";
import "./loggedin.css";
import Header from "../Header";
import Tamagotchi from "../Tamagotchi";

class LoggedIn extends React.Component {

    render() {
        return (
            <div className="login">
              <Header />
              <Tamagotchi id={1} />
            </div>
        );
    }
};

export default LoggedIn;
