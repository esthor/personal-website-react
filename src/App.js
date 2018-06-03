import React, { Component } from 'react';
import erik from './erik.jpg';
import './App.css';
import Nav from './nav/Nav.js';
import Content from './content/Content.js';

class App extends Component {
  render() {
    return (
      <div className="Container">
      <div className="Body">
        <div className="App">
        <div className="leftSide">
          <div className="topLeft">
            <img src={erik} className="erik-avatar" alt="photo of Erik Thorelli" />
            <h1 className="name">Erik Thorelli</h1>
            <p className="under-name-info">Location: <a href="https://www.yelp.com/biz/good-mong-kok-bakery-san-francisco"> San Francisco</a> | Updated 2018.06.01</p>
          </div>
          <div className="leftMenu">
          <Nav></Nav>
          </div>
          </div>
          <div className="mainContent">
          <div className="Content">
          <Content></Content>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
