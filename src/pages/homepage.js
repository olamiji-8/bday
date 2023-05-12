import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from '../components/header'

const Homepage = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Function to create a new balloon
    const createBalloon = () => {
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: Date.now(),
        left: `${Math.floor(Math.random() * 100)}vw`,
        animationDuration: `${Math.floor(Math.random() * 5) + 5}s`,
        backgroundColor: randomColor,
      };
    };

    const interval = setInterval(() => {
      setBalloons((prevBalloons) => [...prevBalloons, createBalloon()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <Header/>
        <div className="container">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: balloon.left,
            animationDuration: balloon.animationDuration,
            backgroundColor: balloon.backgroundColor,
          }}
        >
          Happy Birthday
        </div>
      ))}
    </div>
    </div>
  )
}

export default Homepage