import  Numeral  from 'numeral';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaStar, FaThumbsUp } from 'react-icons/fa';

import { Link, useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';

const Recipe = () => {
    const {id } =useParams()
    console.log(id)
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(`https://chef-recipe-server-jobayermannan.vercel.app/chefs/${id}`)
          .then((res) => res.json())
          .then((data) => setItem(data))
          .catch((err) => console.log(err));
      }, []);
 
 
      const { _id: chefId,likes,numberOfRecipes,recipe2,recipe3, chefName,recipe1,yearsOfExperience, description, chefPicture,listId,rating, } = item || {};
   
      const formattedValue = Numeral(likes).format('0a');


    return (
      <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
    <div className="lg:w-1/2">
      <h1 className="flex justify-start text-lg">{chefName}</h1>
      <h2 className="card-title flex flex-wrap items-center">
        <div className="badge badge-secondary">Experience: <span className="mx-1">{yearsOfExperience}</span> Years</div>
        <div className="badge badge-primary">Numbers of Recipe: <span className="mx-1">{numberOfRecipes}</span></div>
      </h2>
      <p className="text-left">
        {description}
      </p>
      <div className="card-actions justify-between mt-4 md:mt-8">
        <div className="badge badge-outline"><FaThumbsUp></FaThumbsUp><span className="ml-2">{formattedValue}</span></div>
      </div>
    </div>
  </div>
</div>

<div className="lg:flex justify-center">
  <div className="card w-96 bg-base-100 shadow-xl m-4">
    <div className="card-body mb-2">
      <h2 className="card-title">
        {recipe1?.recipeName}
      </h2>
      <div className="badge badge-accent mb-4">Ingredients</div>
      <p>{recipe1?.ingredients}</p>
      <p>{recipe1?.cookingMethod}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline"><FaStar></FaStar>{recipe1?.rating}</div>
        <div className="btn btn-outline bg-secondary btn-sm text-black">favorite</div>
      </div>
    </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl m-4">
    <div className="card-body">
      <h2 className="card-title">
        {recipe2?.recipeName}
      </h2>
      <div className="badge badge-accent">Ingredients</div>
      <p>{recipe2?.ingredients}</p>
      <p>{recipe2?.cookingMethod}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline"><FaStar></FaStar>{recipe2?.rating}</div>
        <div className="btn btn-outline bg-secondary btn-sm text-black">Favorite</div>
      </div>
    </div>
  </div>

  <div className="card w-96 bg-base-100 shadow-xl m-4">
    <div className="card-body">
      <h2 className="card-title">
        {recipe3?.recipeName}
      </h2>
      <div className="badge badge-accent">Ingredients</div>
      <p>{recipe3?.ingredients}</p>
      <p>{recipe3?.cookingMethod}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline"><FaStar></FaStar>{recipe3?.rating}</div>
        <div className="btn btn-outline bg-secondary btn-sm text-black">Favorite</div>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center">
  <Link to={`/recipe/${listId}`}>
    <button className="btn btn-primary">
      <FaArrowLeft></FaArrowLeft>All Recipes
    </button>
  </Link>
</div>
      </div>
     
    );
};

export default Recipe;