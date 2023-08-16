import React from "react";
import './style.css'
function NavigationBar() {
    return (
      <nav className="navigation-bar">
        <div className="logo">Foodle</div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/offer">Offer</a>
          <a href="/service">Service</a>
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
        </div>
        <div className="login-signup">
          <a href="/login">Login</a>
          <button>Sign Up</button>
        </div>
      </nav>
    );
  }
  
  export default NavigationBar;