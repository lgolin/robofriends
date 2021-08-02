import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => {
  return (
    // <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5 card-bg">
    <div className="dib ma2 w-20 dib br3 grow shadow-5 bg-washed-green ">
      {/* <div className="dib mw9 center ph3-ns cf ph2-ns fl w-100 w-25-ns pa2 tc pv4"> */}
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot-icon" />
      <div>
        <h2>{name}</h2>
        <p>{email.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default Card;
