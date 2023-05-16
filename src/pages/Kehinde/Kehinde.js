import React from 'react';
import Header from '../../components/header';
import "./Kehinde.css"
import SlidingCard from './SlidingCard';

const Kehinde = () => {
  const images = [
    "",
    "",
    
    // Add more image URLs here
  ];
  return (
    <div >
      <Header/>
<SlidingCard images={images}/>
      <div className='Kehinde'>
      <a href="https://bdayjs.vercel.app/" style={{color:"black", textAlign:"center"}}>Click Here</a>
      </div>

    </div>
  );
};

export default Kehinde;
