import { useEffect, useState } from "react";
import BannerChefCard from "../BannerChefCard/BannerChefCard";

const Banner = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="carousel w-full">
      {item.map((card, index) => (
        <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
          <BannerChefCard imageUrl={card.chefPicture} title={card.chefName} description={card.description} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? item.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === item.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;



