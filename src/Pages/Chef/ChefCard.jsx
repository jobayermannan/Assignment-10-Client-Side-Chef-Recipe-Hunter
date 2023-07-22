import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({card}) => {
    if (!card) {
        return <div>Card data not available</div>; // or any other fallback UI
      }
    
      const { _id, chefName, description, chefPicture } = card;
      console.log(_id);
    return (
<div className="">
  <div className="card w-11/12 mb-4 text-center  items-center bg-base-100 shadow-xl">
    <figure>
      <img src={chefPicture}  className='' alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
       {_id}
        <div className="badge badge-secondary">Trending</div>
      </h2>
      <p className='text-left'> {description.length < 100 ? (
              <>{description}</>
            ) : (
              <>
                {description.slice(0, 100)}.. .<Link to={`/chef/${_id}`} className='text-blue-500'>READ MORE</Link>
              </>
            )}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>

</div>

      
    );
};

export default ChefCard;