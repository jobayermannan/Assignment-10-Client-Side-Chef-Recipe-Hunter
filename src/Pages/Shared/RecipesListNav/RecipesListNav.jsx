import React, { useEffect, useState } from 'react';
import Header from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Category from '../../Category';

const RecipesListNav = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const [lists, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipe-server-jobayermannan.vercel.app/lists')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowPopup(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        {/* Button to show popup */}
        <button
          className="absolute bottom-0 right-0 h-8 w-36 btn text-lg text-green-500 btn-outline animate-bounce"
          onClick={handlePopupToggle}
        >
          Recipes List
        </button>

        {/* Popup Content */}
        {showPopup && (
          <div className="fixed top-0 left-0 h-full z-200 w-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gradient-to-r from-purple-500 via-sky-300 to-emerald-500 p-8 rounded-lg w-96">
              {/* Your popup content goes here */}
              <h1 className="text-2xl font-bold text-white hover:-z-500">Recipes List</h1>
              <ul className="space-y-2">
                {lists.map((recipe) => (
                       <li key={recipe.id} className="">
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="block py-1 px-4 rounded-lg text-slate-100 bg-gradient-to-b from-gray-400 via-black to-slate-600 hover:bg-gradient-to-r hover:from-purple-950 hover:via-pink-300 hover:to-emerald-950 hover:text-white"
                  >
                    {recipe.name}
                  </Link>
                </li>
             
                ))}
              </ul>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600"
                onClick={handlePopupToggle}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipesListNav;
