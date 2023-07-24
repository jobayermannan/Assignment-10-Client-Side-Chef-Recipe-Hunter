import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";
import Numeral from 'numeral';
import LazyLoad from 'react-lazyload';



const ChefCard = ({card}) => {
    if (!card) {
        return <div>Card data not available</div>; // or any other fallback UI
      }
    
      const { _id, chefName, description,likes,yearsOfExperience,numberOfRecipes, chefPicture } = card;
      console.log(_id);

  
      const formattedValue = Numeral(likes).format('0a');
      

    return (
<div className="">
  <LazyLoad height={200} offset={100}>
  <div className="card w-11/12 mb-4 text-center  items-center bg-base-100 shadow-xl">
    <figure>
      <img src={chefPicture}  className='' alt="Shoes" />
    </figure>
       <div className="card-body px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6">
      <h1 className='flex justify-start text-lg'>{chefName}</h1>
      <h2 className="card-title flex flex-wrap items-center">
        <div className="badge badge-secondary">Experience: <span className='mx-1'>{yearsOfExperience}</span> Years</div>
        <div className="badge badge-primary ">Numbers of Recipe: <span className='mx-1'>{numberOfRecipes}</span></div>
      </h2>
      <p className='text-left'>
        {description.length < 100 ? (
          <>{description}</>
        ) : (
          <>
            {description.slice(0, 100)}...<Link to={`/chef/${_id}`} className='text-blue-500'>view more</Link>
          </>
        )}
      </p>
      <div className="card-actions justify-between mt-4 md:mt-8">
        <div className="badge badge-outline"><FaThumbsUp></FaThumbsUp><span className='ml-2'>{formattedValue}</span></div>
        <div className="badge">
          <Link to={`/chef/${_id}`}>
            <button className='btn btn-xs bg-orange-500 text-black hover:text-white'>View Recipes</button>
          </Link>
        </div>
      </div>
    </div>

  </div>
  </LazyLoad>
 

</div>

      
    );
};

export default ChefCard;