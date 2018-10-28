import React from "react";
import "./leaderboard.css";

class Leaderboard extends React.Component {
  render() {
    const { closeLeaderboard, className } = this.props;
    return (
      <section className={`leaderBoard ${className}`}>
        <nav id="nav">
          <span className="chevron" onClick={event => closeLeaderboard(event)}>
            <i className="fas fa-chevron-right" />
          </span>
        </nav>
        <section class="hero has-text-centered is-paddingless">
          <div class="hero-body is-paddingless">
            <div class="container">
              <h1 class="title">Leaderboard</h1>
              <h2 class="subtitle">
                See how you compare to other little tram bastards
              </h2>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default Leaderboard;
