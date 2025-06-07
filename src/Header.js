import React from 'react';
import logo from './Logo.svg'; // Adjust path if it's in a subfolder
import Logo from './Logo.svg';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
