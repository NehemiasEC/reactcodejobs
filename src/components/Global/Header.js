import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/header.css'
import PropTypes from "prop-types"

class Header extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    items:PropTypes.array.isRequired
  };

  render() {
      const {title, items} = this.props;
      console.log(title);
      console.log(items);
    return (
      <div className="Header">
        <h1>header</h1>
        <ul className="Menu">
            {items.map((item,key)=><li key={key}>{item.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Header;
