import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We'll create this file next

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;