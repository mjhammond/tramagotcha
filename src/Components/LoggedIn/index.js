import React from "react";
import axios from "axios";
import "./loggedin.css";
import Header from "../Header";
import Tamagotchi from "../Tamagotchi";
import UserInfo from "../UserInfo";
import Geolocation from "../Geolocation";
import itemMap from "../../constants/items";
import Nav from "../Nav";

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {}, items: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:6006/getUserDetails?ID=${this.props.userID}`)
      .then(res => {
        this.setState(() => ({
          userInfo: res.data.user,
          items: res.data.items
        }));
        return res;
      })
      //   .then(json => console.log(JSON.stringify(json)))
      .catch(console.error);
  }

  render() {
    const { userInfo, items } = this.state;
    return (
      <div className="loggedIn">
        {UserInfo && <Nav userInfo={userInfo} />}
        <Header />
        {userInfo.PetId && (
          <Tamagotchi id={userInfo.PetId} items={items} itemMap={itemMap} />
        )}
        {userInfo &&
          items && (
            <UserInfo userInfo={userInfo} items={items} itemMap={itemMap} />
          )}
        {userInfo && <Geolocation userID={userInfo.ID} />}
      </div>
    );
  }
}

export default LoggedIn;
