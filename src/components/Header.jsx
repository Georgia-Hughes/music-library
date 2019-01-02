import React from 'react';
import NavBar from './Navbar';
import '../styles/header.scss';

const Header = () => (
  <React.Fragment>
    <div className="header">
      <h2>Music Library</h2>
      <NavBar />
    </div>
  </React.Fragment>
);

export default Header;
