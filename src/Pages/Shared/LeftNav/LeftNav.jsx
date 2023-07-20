import React, { useState } from 'react';

const LeftNav = () => {

    
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
      setShowPopup(!showPopup);
    };
    return (
        <div>
        
    

        <div className="relative">
      {/* Mini Navbar at the top */}
     

      
           

      {/* Button to show popup */}
      <button className="fixed top-8 left-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePopupToggle}>
        All Recipes
      </button>

      {/* Popup Content */}
      {showPopup && (
        <div className="fixed top-0 left- h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            {/* Your popup content goes here */}
            <h1 className="text-2xl font-bold">All Recipes</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-1">Recipe 1</a>
              </li>
              <li>
                <a href="#" className="block py-1">Recipe 2</a>
              </li>
              {/* Add more recipes */}
            </ul>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-4" onClick={handlePopupToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  
  
</div>
    );
};

export default LeftNav;