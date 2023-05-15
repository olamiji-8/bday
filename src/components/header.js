import React from 'react'
import "./header.css"
import Kehinde from '../pages/kehinde'
import Tawio from '../pages/tawio'
import Cake from '../Cake'

const Header = () => {
  return (
<header className="header">
      <nav className="navbar">
      <Cake/>
        <ul className="nav-items">
          <li className="nav-item">Tawio</li>
          <li className="nav-item">Kehinde</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

