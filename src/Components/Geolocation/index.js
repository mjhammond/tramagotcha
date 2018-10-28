import React from "react";
import axios from "axios";
import "./geolocation.css";

class Geolocation extends React.Component {
  state = {
    lat: 0,
    long: 0,
    locationPoller: null
  };

  getGeolocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.setState(() => ({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        }));
        this.postGeolocation();
      });
    } else {
      console.err("No geolocation API avaliable");
    }
  }

  postGeolocation() {
    axios
      .get(
        `http://localhost:6006/score?ID=${this.props.userID}&lat=${
          this.state.lat
        }&long=${this.state.long}`
      )
      .then(res => {
        return res;
      })
      .then(json => console.log(JSON.stringify(json)))
      .catch(console.error);
  }

  componentDidMount() {
    this.getGeolocation();
    const locationPoller = setInterval(this.getGeolocation.bind(this), 5000);
    this.locationPoller = locationPoller;
  }

  componentWillUnmount() {
    clearInterval(this.locationPoller);
  }

  render() {
    return (
      <div className="geolocation">
        Your location: lat {this.state.lat.toFixed(4)}, lon{" "}
        {this.state.long.toFixed(4)}
      </div>
    );
  }
}

export default Geolocation;
