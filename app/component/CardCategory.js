import React from 'react';

const categories = [
  { name: 'Open world', image: '/card3.svg' },
  { name: 'Couch multiplayer', image: '/card3.svg' },
  { name: 'Single player', image: '/card3.svg' },
  { name: 'Kids and families', image: '/card3.svg' },
  { name: 'Cozy games', image: '/card3.svg' },
  { name: 'Platforming', image: '/card3.svg' },
  { name: 'Strategy', image: '/card3.svg' },
  { name: 'Rhythm games', image: '/card3.svg' },
  { name: 'Sports', image: '/card3.svg' },
  { name: 'Free-to-play', image: '/card3.svg' },
  { name: 'Stealth', image: '/card3.svg' },
  { name: 'Fighting games', image: '/card3.svg' },
  { name: 'Post apocalyptic', image: '/card3.svg' },
  { name: 'Indies', image: '/card3.svg' },
  { name: 'Horror', image: '/card3.svg' }
];

const CardCategory = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 p-10 mx-20">
      {categories.map((category) => (
        <div key={category.name} className="relative">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white font-bold text-center py-2">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCategory;