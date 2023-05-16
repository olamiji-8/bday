import React from 'react';
import './BirthdayCard.css';

const BirthdayCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h2>Happy Birthday!</h2>
        </div>
        <div className="card-back">
          <h2>Wishing you a fantastic day!</h2>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
