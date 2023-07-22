import React from 'react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">CHEF Mania</h2>
            <p className="mt-2">Your food inspiration source. Find the best recipes, discover mouthwatering cuisines, and plan your meals for the week.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Explore</h2>
            <ul className="mt-2">
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Follow Us</h2>
            <ul className="mt-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 ">
          <p>&copy; {currentYear} <span className='normal-case text-2xl bg-gradient-to-r from-purple-500 to-emerald-500 text-transparent bg-clip-text font-mono font-bold'>CHEF Mania </span>  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
