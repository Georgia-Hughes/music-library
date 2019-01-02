import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/add-artist" className="link">Add Artist</Link>
    </ul>
  );
};

export default NavBar;
