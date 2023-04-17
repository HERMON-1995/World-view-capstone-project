import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="../" element={<Home />}>
        <i className="fa-solid fa-chevron-left" />
      </Link>
      <p>Countries</p>
      <div className="right-nav">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default NavBar;
