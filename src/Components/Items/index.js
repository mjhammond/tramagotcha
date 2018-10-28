import React, { Component } from 'react';
import axios from 'axios';
import './items.css';

const Item = ({ name, purchased, cost, onClick, itemID, userID }) => (
    <div key={name} className={`item ${purchased ? 'purchased' : ''}`}>
      {name} {cost} {!purchased && <span onClick={() => onClick(itemID, userID)}>Buy</span>}
    </div>
);

class ItemList extends Component {
    state = {
        items: [],
    };

    buyItem(itemID, userID) {
        console.log(itemID, userID);
        axios
            .get(`http://localhost:6006/BuyItems?userId=${userID}&itemId=${itemID}`)
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
        return (
            <div className={`items ${this.props.className}`}>
                <div className="bobsBurgers" onClick={event => this.props.closeItemDrawer(event)}>
                    <i className="fas fa-bars" />
                </div>
                {this.props.items.map((item, i) => (
                    <Item
                        itemID={item.Id}
                        userID={this.props.userID}
                        name={item.Name}
                        purchased={item.purchased}
                        cost={item.Cost}
                        onClick={this.buyItem}
                    />
                ))}
            </div>
        );
    }
}

export default ItemList;
