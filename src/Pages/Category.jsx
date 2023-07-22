import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from './Chef/ChefCard';

const Category = () => {


  const { id } = useParams();
  const Lists = useLoaderData();
  console.log(Lists);

  // Check if Lists is empty or undefined
  if (!Lists || Lists.length === 0) {
    return <div>Loading...</div>; // or display a message for empty data
  }

  return (
    <div className=''>
      <div className=" px-12 mx-12   flex justify-center rounded-2xl bg-gradient-to-l from-purple-500 to-emerald-500 text-primary-content">
  <a className="btn btn-ghost normal-case text-xl"> Number of Recipes: {Lists.length}</a>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2  pl-14 gap-4">
        {Lists.map((card) => (
          <ChefCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Category;
