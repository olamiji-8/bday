import React from "react";
import "./Taiwo.css";
import BirthdayCard from "../../components/BirthdayCard/BirthdayCard";
import Header from "../../components/header";
import SlidingCard from "./SlidingCard";


const Taiwo = () => {
  return (
    <div className="">
      <div className="head">
      <Header />
      </div>
     <div className="Taiwo">
      <div className="grid">
      <BirthdayCard/>
     <SlidingCard/>
      </div>

     </div>
    
      
    </div>
  )
}

export default Taiwo;


