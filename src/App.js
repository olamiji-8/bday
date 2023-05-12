import React from 'react'
import Homepage from './pages/homepage'
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div >
      <Homepage />
      <Routes>
        <Route path='/taiwo'/>
        <Route path='/kehinde'/>
      </Routes>
    </div>
  )
}

export default App