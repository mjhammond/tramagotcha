import React from "react";
import "./leaderboard.css";
import axios from "axios";
// import TamagotchiModal from "../TamagotchiModal";

class Leaderboard extends React.Component {
  state = {
    leaderboard: [],
    showModal: false
  };

  showModalHandler = e => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  closeModalHandler = () => this.setState({ showModal: false });

  componentDidMount() {
    axios
      .get("http://localhost:6006/leaderboard")
      .then(res => {
        this.setState(() => ({
          leaderboard: res.data
        }));
        return res;
      })
      .catch(console.error);
  }
  render() {
    const { closeLeaderboard, className } = this.props;
    const { leaderboard, showModal } = this.state;

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
        <section className="columns is-mobile leaders">
          <section className="column">
            {leaderboard &&
              leaderboard.map((leader, i) => (
                <section className="leadersColumn">
                  <span className="position">{i + 1}</span>
                  <div
                    className="card"
                    onClick={event => this.showModalHandler(event)}
                  >
                    <div className="card-content">
                      <div className="content">
                        <section className="username">
                          {leader.username}
                        </section>
                        <section className="score">{leader.score}</section>
                      </div>
                    </div>
                  </div>
                  {/* <TamagotchiModal id={leader.petId} showModal={showModal} /> */}
                </section>
              ))}
          </section>
        </section>
      </section>
    );
  }
}
export default Leaderboard;
