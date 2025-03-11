// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/NavBar.css';
import CartPopup from './CartPopup';
import { FaShoppingCart } from 'react-icons/fa'; // Import the icon

function Navbar() {
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleCartClick = () => {
    setShowCartPopup(true);
  };

  const closeCartPopup = () => {
    setShowCartPopup(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-menu left">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src="/LogoAva.png" alt="Ava Logo" />
      </div>
      <nav className="nav-menu right">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact-us">Contact</a></li>
          <li>
            {/* Use the font icon instead of an image */}
            <button className="cart-icon-button" onClick={handleCartClick}>
              <FaShoppingCart size={24} color="#fff" />
            </button>
          </li>
        </ul>
      </nav>
      {showCartPopup && <CartPopup onClose={closeCartPopup} />}
    </header>
  );
}

export default Navbar;
