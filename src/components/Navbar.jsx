import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/vendors">Vendors</a></li>
        <li><a href="/transactions">Transactions</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/analytics">Analytics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
