import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
  render() {
    return (
      
      // <div classname="Content">
        <div className="content-body">
          <div className="content-header">About</div>
            <div className="content-body">
                <p>I made this portfolio site from scratch in vanilla web standards (HTML, CSS, and JavaScript) without any third-party frameworks or templates, because how often do we get to play with such limited tools? Well...it probably shows. 🙄</p>
                <p>I am a JavaScript engineer and recovering startup CEO living in the San Francisco Bay Area. I have worked in Europe and China and am glad to be back in the good 'ol US of A.</p>
                <p>You are welcome to check out my <a href="./music.html">MUSIC</a>, <a href="./blog.html">BLOG</a>, <a href="./code.html">CODE</a>, and <a href="./design.html">DESIGN</a> work by navigating on the menu to your left. </p>
                <p>I also take opportunities to give talks on a broad range of topics in tech. You can check out some of my previous talks below:</p>
                <br></br>
                <h2>Talks</h2>
                <p><a href="https://kodsnack.se/international/210/" target="_blank">Expose yourself to new ideas: Sketch & Design</a></p>
                <p><a href="https://www.meetup.com/ReactJS-Goteborg/events/239869601/" target="_blank">React Primitives and React-SketchApp - A Unified Future?</a></p>
                <p><a href="https://www.meetup.com/Sketch-App-Meetup-Goteborg/events/237184601/" target="_blank">FramerJS for UI/UX Prototyping</a></p>
            </div>
        </div>
        
        // </div>
        
    );
  }
}



export default Content;
