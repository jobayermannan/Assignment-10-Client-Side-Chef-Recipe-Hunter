import React, { useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftNav from '../LeftNav/LeftNav';
import Banner from '../Header/Header';

const HOme = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {/* Big Navbar */}
      <Navbar />

      {/* Mini Navbar at the top */}
      {/* You can add Navbar or LeftNav components here */}
      <div className="relative ">
        <Header />

        {/* Button to show popup */}
        <button
          className="absolute bottom-0 right-0 h-12 w-24  btn btn-outline  text-purple-400  hover:from-purple-600 hover:to-emerald-600       "
          onClick={handlePopupToggle}
        >
          All Recipes
        </button>

        {/* Popup Content */}
        {showPopup && (
          <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              {/* Your popup content goes here */}
              <h1 className="text-2xl font-bold">All Recipes</h1>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block py-1">
                    Recipe 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1">
                    Recipe 2
                  </a>
                </li>
                {/* Add more recipes */}
              </ul>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md mt-4"
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

export default HOme;


