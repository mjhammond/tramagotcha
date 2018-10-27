import React from 'react';
import "./geolocation.css";

class Geolocation extends React.Component {
    state = {
        lat: 0,
        lon: 0,
        locationPoller: null,
    };

    getGeolocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState(() => ({ lat: pos.coords.latitude, lon: pos.coords.longitude}));
            })
        } else {
            console.err('No geolocation API avaliable');
        }
    }

    componentDidMount() {
        this.getGeolocation();
        const locationPoller = setInterval(this.getGeolocation.bind(this), 5000);
        this.locationPoller = locationPoller;
    }

    componentWillUnmount(){
        clearInterval(this.locationPoller);
    }

    render() {
        return (<div className="geolocation">
                Your location: lat {this.state.lat.toFixed(4)}, lon {this.state.lon.toFixed(4)}
               </div>);
    }
}

export default Geolocation;
