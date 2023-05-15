import React from 'react'
import "./header.css"
import Kehinde from '../pages/kehinde'
import Tawio from '../pages/tawio'

const Header = () => {
  return (
<header className="header">
      <nav className="navbar">
        <div className="brand"></div>
        <ul className="nav-items">
          <li className="nav-item">Tawio</li>
          <li className="nav-item">Kehinde</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

