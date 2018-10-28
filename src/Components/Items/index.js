import React, { Component } from 'react';
import axios from 'axios';
import './items.css';

const Item = ({ name, purchased, cost }) => (
    <div key={name} className={`item ${purchased ? 'purchased' : ''}`}>
      {name} {cost} {!purchased && <span>Buy</span>}
    </div>);

class ItemList extends Component {
    state = {
        items: []
    }

    render() {
        return (
            <div className={`items ${this.props.className}`}>
                <div className="bobsBurgers" onClick={event => this.props.closeItemDrawer(event)}>
                    <i className="fas fa-bars" />
                </div>
                {this.props.items.map((item, i) => (
                    <Item name={item.Name} purchased={item.purchased} cost={item.Cost} />
                ))}
            </div>
        );
    }
}

export default ItemList;
