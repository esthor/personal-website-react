import React, { Component } from 'react';

import './Nav.css';


class Nav extends Component {
  render() {
    return (
      
      <div classname="Nav">
            <div className="innerLeftMenu">
                <div className="navItem"><a href="./music.html">MUSIC</a></div>
                <div className="navItem"><a href="./blog.html">BLOG</a></div>
                <div className="navItem"><a href="./code.html">CODE</a></div>
                <div className="navItem"><a href="./design.html">DESIGN</a></div>
                {/* <div className="currentNavItem">DESIGN</div> */}
                <div className="navItem"><a href="./contact.html">CONTACT</a></div>
            </div>
        </div>
    );
  }
}


export default Nav;
