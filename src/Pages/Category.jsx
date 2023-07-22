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
      this is category{Lists.length}
      <div className="grid grid-cols-1 md:grid-cols-2  pl-14 gap-4">
        {Lists.map((card) => (
          <ChefCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Category;
