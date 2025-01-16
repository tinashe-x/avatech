import React from 'react';
import '../styles/NavBar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-menu left">
        <ul>
          <li><a href="../Pages/HomePage">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="/LogoAva.png" alt="Ava Logo" />
      </div>
      <nav className="nav-menu right">
        <ul>
          <li><a href="../Pages/ProductPage">Products</a></li>
          <li><a href="../Pages/ContactPage">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
