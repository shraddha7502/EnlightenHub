import React from 'react';
import './Card.css';
import java from '../assets/java_developer.jpeg'

const Card = ({ title, subtitle, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image">
        <img src={java} alt={title} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__subtitle">{subtitle}</p>
      </div>
      <div className="card__actions">
        <button className="card__button">Share</button>
        <button className="card__button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;