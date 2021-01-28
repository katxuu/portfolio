import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="box-header">
            {/*<div className="box-logo">
              <a href="index.html"><img src="img/logo.png" width="80" alt="Logo"></a>
              </div>
            {/* box-nav */}
            <a className="box-primary-nav-trigger" href="#0">
              <span className="box-menu-text">Menu</span><span className="box-menu-icon"></span>
            </a>
            {/*box-primary-nav-trigger */}
          </header>
        </div>
        <nav>
          <ul className="box-primary-nav">
            <li className="box-label">Menu</li>

            <li><a href="home">Home</a> <i className="ion-ios-circle-filled color"></i></li>
            <li><a href="about">About me</a></li>
            <li><a href="portfolio">portfolio</a></li>
            <li><a href="blog">blog</a></li>
            <li><a href="contact">contact me</a></li>



            <li className="box-label">Follow me</li>

            <li className="box-social"><a href="#0"><i className="ion-social-facebook"></i></a></li>
            <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
            <li className="box-social"><a href="#0"><i className="ion-social-twitter"></i></a></li>
            <li className="box-social"><a href="#0"><i className="ion-social-dribbble"></i></a></li>
          </ul>
          </nav>
      </div>
    );
  }
}
