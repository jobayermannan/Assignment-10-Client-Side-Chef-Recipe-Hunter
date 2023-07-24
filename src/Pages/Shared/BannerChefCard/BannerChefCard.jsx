

import React from 'react';

const BannerChefCard = ({ imageUrl, title,description,yearsOfExperience,numberOfRecipes }) => {
  return (
    <div className="hero h-96 w-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse h-full">
        <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl h-full lg:w-1/2 lg:max-w-md" />
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl text-purple-400 font-bold mb-4">Our Heros</h1>
          <h1 className="text-xl lg:text-3xl font-semibold mb-10">{title}</h1>
          <p className="py-4 lg:py-6">{description}</p>
         
        </div>
      </div>
    </div>
  );
};
export default BannerChefCard;



