import React from 'react'
import "./header.css"
import Cake from '../Cake'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<header className="header">
      <nav className="navbar">
        <Link to = "/" >  <Cake/> </Link>

     <div className='Header_nav'>
     <Link to = "/taiwo" >Taiwo</Link>
          <Link to ="/kehinde" >Kehinde</Link>  
     </div>

        
      </nav>
    </header>
  )
}

export default Header

