import React from "react";
import "./userinfo.css";
import ItemList from "../Items";

class UserInfo extends React.Component {
  state = {
    itemDrawerOpen: false
  };

  itemButtonClickHandler = e => {
    const { itemDrawerOpen } = this.state;
    e.preventDefault();
    this.setState({ itemDrawerOpen: !itemDrawerOpen });
  };

  closeItemDrawer = e => {
    e.preventDefault();
    this.setState({ itemDrawerOpen: false });
  };

  render() {
    const { itemDrawerOpen } = this.state;
    const { userInfo, items } = this.props;
    return (
      <div className="userInfo">
        <span className="petName"> {userInfo.petName}</span>
        <section className="columns is-mobile is-gapless" id="userInfo">
          <section className="column">
            <span className="userInfoSpan" id="level">
              Level: {userInfo.currentLevel}
            </span>
            <span className="userInfoSpan" id="currency">
              Currency: {userInfo.currentCurrency}
            </span>
            <span className="userInfoSpan" id="xp">
              Xp: {userInfo.currentXp}
            </span>
          </section>
        </section>
        <span
          className="button is-primary is-hovered is-inverted"
          onClick={event => this.itemButtonClickHandler(event)}
        >
          Items
        </span>
        <ItemList
          items={items}
          className={itemDrawerOpen ? "open" : "closed"}
          closeItemDrawer={this.closeItemDrawer}
        />
      </div>
    );
  }
}
export default UserInfo;
