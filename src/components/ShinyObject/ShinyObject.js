import React, { useEffect, useState } from 'react';
import './ShinyObject.css';

const Dice = () => {
  const [top, setTop] = useState(-100);
  const [left, setLeft] = useState(`${Math.floor(Math.random() * 100)}vw`);
  const [animationDuration, setAnimationDuration] = useState(`${Math.floor(Math.random() * 5) + 5}s`);

  useEffect(() => {
    const resetObject = () => {
      setTop(-100);
      setLeft(`${Math.floor(Math.random() * 100)}vw`);
      setAnimationDuration(`${Math.floor(Math.random() * 5) + 5}s`);
    };

    const timeout = setTimeout(resetObject, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="dice"
      style={{
        top: `${top}vh`,
        left,
        animationDuration,
      }}
    />
  );
};

export default Dice;
