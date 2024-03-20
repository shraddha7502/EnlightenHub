import React from 'react';
import './Card.css';
// import java from '../assets/java_developer.jpeg'

const Card = ({  title, image , description, date}) => {
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


//     <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96  ">
//   <img class="w-full" src={image} alt="Sunset in the mountains"/>
//   {/* <img class="w-full" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sunset in the mountains"/> */}
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">{title}</div>
//     <p class="text-gray-700 text-base">
//      {description}
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>
<div
  class="relative h-[400px] w-[300px] rounded-md me-4 float-left my-20 mx-10">
  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src={image}
      alt="ui/ux review check" />
  </div>
  <div class="p-6">
    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {title}
    </h4>
    <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
    {description}
    </p>
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center -space-x-3">
      <img alt="natali craig"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
      <img alt="Tania Andrew"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
    </div>
    <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
      {date}
    </p>
  </div>
</div> 


  );
};

export default Card;