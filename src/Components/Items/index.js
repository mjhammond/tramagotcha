import React, { Component } from 'react';
import axios from 'axios';
import './items.css';

const Item = ({ name, purchased, cost, onClick }) => (
    <div key={name} className={`item ${purchased ? 'purchased' : ''}`}>
      {name} {cost} {!purchased && <span onClick={name => onClick(name)}>Buy</span>}
    </div>
);

class ItemList extends Component {
    state = {
        items: [],
    };

    buyItem(id) {
        console.log(id);
    }

    render() {
        return (
            <div className={`items ${this.props.className}`}>
                <div className="bobsBurgers" onClick={event => this.props.closeItemDrawer(event)}>
                    <i className="fas fa-bars" />
                </div>
                {this.props.items.map((item, i) => (
                    <Item
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
