import Numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaStar, FaThumbsUp } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams();

  const [item, setItem] = useState();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`https://chef-recipe-server-jobayermannan.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  const {
    _id: chefId,
    likes,
    numberOfRecipes,
    recipe2,
    recipe3,
    chefName,
    recipe1,
    yearsOfExperience,
    description,
    chefPicture,
    
  } = item || {};

  const formattedValue = Numeral(likes).format('0a');

  const handleFavoriteClick = (recipeId) => {
    setFavorites((favorites) => [...favorites, recipeId]);
    alert("added to your favorites list")
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
          <div className="lg:w-1/2">
            <h1 className="flex justify-start text-lg">{chefName}</h1>
            <h2 className="card-title flex flex-wrap items-center">
              <div className="badge badge-secondary">
                Experience: <span className="mx-1">{yearsOfExperience}</span> Years
              </div>
              <div className="badge badge-primary">
                Numbers of Recipe: <span className="mx-1">{numberOfRecipes}</span>
              </div>
            </h2>
            <p className="text-left">{description}</p>
            <div className="card-actions justify-between mt-4 md:mt-8">
              <div className="badge badge-outline">
                <FaThumbsUp />
                <span className="ml-2">{formattedValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center">
        {[recipe1, recipe2, recipe3].map((recipe) => (
          <div key={recipe?.recipeId} className="card w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body mb-2">
              <h2 className="card-title">{recipe?.recipeName}</h2>
              <div className="badge badge-accent mb-4">Ingredients</div>
              <p>{recipe?.ingredients}</p>
              <p>{recipe?.cookingMethod}</p>
              <div className="card-actions justify-between">
                <div className="badge badge-outline">
                  <FaStar />
                  {recipe?.rating}
                </div>
                <button
                  className="btn btn-outline bg-secondary btn-sm text-black"
                  onClick={() => handleFavoriteClick(recipe?.recipeId)}
                  disabled={favorites.includes(recipe?.recipeId)}
                >
                  Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
       

      </div>

      <div className="flex justify-center">
        <Link to={`/recipe/${item?.listId}`}>
          <button className="btn btn-primary">
            <FaArrowLeft /> Recipes List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
