import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload'; // Import LazyLoad from react-lazyload
import BannerChefCard from '../BannerChefCard/BannerChefCard';

const Banner = () => {
  const [item, setItem] = useState([]);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-jobayermannan.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  const handleItemLoad = (index) => {
    setLoadedItems((prevLoadedItems) => [...prevLoadedItems, index]);
  };

  return (
    <div className="carousel w-full">
      {item.map((card, index) => (
        <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <LazyLoad height={200} offset={100}>
            <BannerChefCard
              imageUrl={card.chefPicture}
              title={card.chefName}
              description={card.description}
              onLoad={() => handleItemLoad(index)}
            />
          </LazyLoad>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? item.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === item.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
      <p>Loaded items: {loadedItems.join(', ')}</p>
    </div>
  );
};

export default Banner;



