import cake from "./cake.webp"
import React from 'react'
import "./components/header.css"

const Cake = () => {
  return (
    <div className="cake">
        <img src={cake}  alt="" height="40px" style={{borderRadius:"50%"}}/>
    </div>
  )
}

export default Cake