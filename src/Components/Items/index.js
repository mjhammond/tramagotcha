import React, { Component } from 'react';
import axios from 'axios';
import './items.css';

class ItemList extends Component {
    state = {
        items: []
    }

    render() {
        return (
            <div className={`items ${this.props.className}`}>
                <span className="bobsBurgers" onClick={event => this.props.closeItemDrawer(event)}>
                    <i className="fas fa-bars" />
                </span>
                {this.props.items.map((item, i) => (
                    <span key={i} className="item">
                        {item.Name}
                    </span>
                ))}
            </div>
        );
    }
}

// const ItemList = ({ className, items, closeItemDrawer }) => (
//   <div className={`items ${className}`}>
//     <span className="bobsBurgers" onClick={event => closeItemDrawer(event)}>
//       <i className="fas fa-bars" />
//     </span>
//     {items.map((item, i) => (
//       <span key={i} className="item">
//         {item.itemName}
//       </span>
//     ))}
//   </div>
// );

export default ItemList;
