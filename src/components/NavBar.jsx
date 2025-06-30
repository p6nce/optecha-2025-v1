import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-images">
            <span>
                <img src="/images/logo/o.png" alt="O" />
            </span>
            <span>
                <img src="/images/logo/p.png" alt="p" />
            </span>
            <img src="/images/logo/t.png" alt="t" />
            <img src="/images/logo/e.png" alt="e" />
            <img src="/images/logo/c.png" alt="c" />
            <img src="/images/logo/h.png" alt="h" />
            <img src="/images/logo/a.png" alt="a" />
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#soultions">Innovative Solutions</a></li>
          <li><a href="#markets">Markets</a></li>
          <li><a href="#luxsmith">Lux Smith Designs</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

