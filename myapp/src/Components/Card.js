import React from 'react';
import './Card.css';
// import java from '../assets/java_developer.jpeg'

const Card = ({  title, image , description}) => {
  return (
    // <div className="card" onClick={onClick}>
    //   <div className="card__image">
    //     <img src={java} alt={title} />
    //   </div>
    //   <div className="card__content">
    //     <h2 className="card__title">{title}</h2>
    //     <p className="card__subtitle">{subtitle}</p>
    //   </div>
    //   <div className="card__actions">
    //     <button className="card__button">Share</button>
    //     <button className="card__button">Learn More</button>
    //   </div>
    // </div>


    <div class="max-w-sm rounded overflow-hidden shadow-lg float-left px-2 my-5 content-center mx-5  ">
  <img class="w-full" src={image} alt="Sunset in the mountains"/>
  {/* <img class="w-full" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sunset in the mountains"/> */}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
     {description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


  );
};

export default Card;