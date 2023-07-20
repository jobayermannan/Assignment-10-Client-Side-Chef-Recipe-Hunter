

import React from 'react';

const HeroCard = ({ imageUrl, title, description }) => {
  return (
    <div className="hero h-96 w-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse h-full">
        <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl h-full lg:w-1/2 lg:max-w-md" />
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold">{title}</h1>
          <p className="py-4 lg:py-6">{description}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default HeroCard;


// <nav className="w-1/4"> {/* Adjust the width as per your requirement */}
// <div className="navbar bg-base-100">
//   <div className="navbar-center">
//     <ul className="menu  px-1 items-center">
//       <li><a>Item 1</a></li>
//       <li>
//         Xshit
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
// </div>
// </nav>
