import React, { useEffect, useState } from 'react';
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
 
 
      const { _id: chefId, chefName, description, chefPicture,listId } = item || {};

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chefName} </h1>
            <p className="py-6">{description}.</p>
             <Link to={`/recipe/${listId}`}><button className="btn btn-primary">All News in this Category</button></Link> 
          </div>
        </div>
      </div>
    );
};

export default Recipe;