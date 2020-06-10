import React from 'react';
import {NavLink} from 'react-router-dom';

// Create Nav function component
const Nav = ({match}) =>
(
    <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/cats">Cats</NavLink></li>
          <li><NavLink to="/search/dogs">Dogs</NavLink></li>
          <li><NavLink to="/search/computers">Computers</NavLink></li>
        </ul>
    </nav>
);

// Export component
export default Nav;