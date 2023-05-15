import React, { useEffect, useState } from 'react';
import './ShinyObject.css';

const Dice = () => {
    const [showGoldSpray, setShowGoldSpray] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setShowGoldSpray(true);
        setTimeout(() => {
          setShowGoldSpray(false);
        }, 1000);
      }, 120000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
        <div className="Gold">
          {showGoldSpray && <div className="gold-spray"></div>}
        </div>
      );
    }

export default Dice;




 


