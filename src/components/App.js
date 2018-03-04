import React, { Component } from 'react';
import logo from './Global/images/logo.svg';
import './Global/css/App.css';
import PropTypes from "prop-types";

// components
import Header from "./Global/Header"
import Content from "./Global/Content"
import Footer from "./Global/Footer"


//data
import item from "../data/menu"


class App extends Component {
    static propTypes={
        children:PropTypes.object.isRequired
    };
  render() {
    console.log(item);
    const {children} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Header items={item} title="Hola Mundo"/>
          <Content body={children}/>
          <Footer/>

      </div>
    );
  }
}

export default App;
