import React from 'react';

const categories = [
  { name: 'Open world', image: '/cardCat14.svg' },
  { name: 'Couch multiplayer', image: '/cardCat13.svg' },
  { name: 'Single player', image: '/cardCat12.svg' },
  { name: 'Kids and families', image: '/cardCat11.svg' },
  { name: 'Cozy games', image: '/cardCat10.svg' },
  { name: 'Platforming', image: '/cardCat9.svg' },
  { name: 'Strategy', image: '/cardCat8.svg' },
  { name: 'Rhythm games', image: '/cardCat7.svg' },
  { name: 'Sports', image: '/cardCat6.svg' },
  { name: 'Free-to-play', image: '/cardCat5.svg' },
  { name: 'Stealth', image: '/cardCat4.svg' },
  { name: 'Fighting games', image: '/cardCat3.svg' },
  { name: 'Post apocalyptic', image: '/cardCat2.svg' },
  { name: 'Indies', image: '/cardCat1.svg' },
  { name: 'Horror', image: '/cardCat0.svg' }
];

const CardCategory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((category) => (
          <button 
            key={category.name}
            className="group relative w-full aspect-square transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-center px-2 py-1 text-sm sm:text-base md:text-lg bg-black bg-opacity-50 rounded-full">
                {category.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardCategory;