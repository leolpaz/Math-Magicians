import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="nav-bar">
      <h1 className="title">Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <React.Fragment key={link.id}>
            <li className="nav-item">
              <NavLink className="nav-link" to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
            <span>|</span>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
