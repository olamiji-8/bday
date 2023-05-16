import React from 'react'
import "./header.css"
import Cake from '../Cake'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header className="header">
      <nav className="navbar">
        <Link to = "/" >  <Cake/> </Link>
     
        <ul className="nav-items">
          <Link to = "/taiwo" ><li className="nav-item">Taiwo</li></Link>
          <Link to ="/kehinde" ><li className="nav-item">Kehinde</li></Link>  
        </ul>
      </nav>
    </header>
  )
}

export default Header

