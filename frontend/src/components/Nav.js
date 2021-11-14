import React from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
<>
       <nav className="navbar">
  <div className="max-width">
    <div className="logo"> <a href>Portfo<span>lio.</span></a></div>
    <ul className="menu">
      <li> <Link to='/' className="menu-btn"></Link></li>
    </ul>
  </div>
  </nav>
    </>
    )
}

export default Nav;