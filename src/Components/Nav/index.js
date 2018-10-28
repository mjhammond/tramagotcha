import React from "react";
import "./nav.css";

import Leaderboard from "../Leaderboard";

class Nav extends React.Component {
  state = {
    leaderboardOpen: false
  };

  leaderboardHandler = e => {
    const { leaderboardOpen } = this.state;
    e.preventDefault();
    this.setState({
      leaderboardOpen: !leaderboardOpen
    });
  };

  closeLeaderboard = e => {
    this.setState({ leaderboardOpen: false });
  };

  render() {
    const { leaderboardOpen } = this.state;
    const { userInfo } = this.props;
    return (
      <section style={{ width: "100%" }}>
        <nav id="nav">
          <section id="username">
            <span>{userInfo.username}</span>
          </section>
          <section id="burger">
            <span onClick={event => this.leaderboardHandler(event)}>
              <i className="fas fa-bars" />
            </span>
          </section>
        </nav>
        <Leaderboard
          closeLeaderboard={this.closeLeaderboard}
          userInfo={userInfo}
          className={leaderboardOpen ? "open" : "closed"}
        />
      </section>
    );
  }
}

export default Nav;
