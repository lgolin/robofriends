import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5 card-bg">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot-icon" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
