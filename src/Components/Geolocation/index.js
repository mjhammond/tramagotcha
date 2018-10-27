import React from 'react';

class Geolocation extends React.Component {
    state = {
        lat: '',
        lon: '',
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
        const locationPoller = setInterval(this.getGeolocation.bind(this), 5000);
        this.locationPoller = locationPoller;
    }

    render() {
        return (<div />);
    }
}

export default Geolocation;
