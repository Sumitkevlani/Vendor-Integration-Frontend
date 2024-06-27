import React from 'react';
import './Card.css';

const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={img} alt="Card images" className='card-img'></img>
    </div>
  );
};

export default Card;
