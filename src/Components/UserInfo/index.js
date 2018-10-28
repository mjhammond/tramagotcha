import React from "react";
import axios from "axios";
import "./userinfo.css";
import ItemList from "../Items";
import UserItems from "../UsersItems";

class UserInfo extends React.Component {
  state = {
    itemDrawerOpen: false,
    items: []
  };

  itemButtonClickHandler = e => {
    const { itemDrawerOpen } = this.state;
    e.preventDefault();
    this.setState({ itemDrawerOpen: !itemDrawerOpen });
    this.getItems();
  };

  closeItemDrawer = e => {
    e.preventDefault();
    this.setState({ itemDrawerOpen: false });
  };

  getItems() {
    axios
      .get(`http://localhost:6006/getItems?ID=${this.props.userInfo.ID}`)
      .then(res => {
        console.log(res);

        this.setState(() => ({
          items: res.data
        }));

        return res;
      })
      //   .then(json => console.log(JSON.stringify(json)))
      .catch(console.error);
  }

  render() {
    const { itemDrawerOpen } = this.state;
    const { userInfo, items } = this.props;

    return (
      <div className="userInfo">
        <UserItems items={items} />
        <span className="petName"> {userInfo.petName}</span>
        <section className="columns is-mobile is-gapless" id="userInfo">
          <section className="column">
            <div className="userData">
              <span className="userInfoSpan" id="level">
                Level: {userInfo.currentLevel}
              </span>
              <span className="userInfoSpan" id="currency">
                Currency: {userInfo.currentCurrency}
              </span>
              <span className="userInfoSpan" id="xp">
                Xp: {userInfo.currentXp}
              </span>
            </div>
          </section>
        </section>
        <span
          className="button is-success is-hovered"
          id="itemsButton"
          onClick={event => this.itemButtonClickHandler(event)}
        >
          Items
        </span>
        <ItemList
          userID={userInfo.ID}
          items={this.state.items}
          className={itemDrawerOpen ? "open" : "closed"}
          closeItemDrawer={this.closeItemDrawer}
        />
      </div>
    );
  }
}
export default UserInfo;
