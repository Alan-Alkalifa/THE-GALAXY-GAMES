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
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 p-10 mx-20">
      {categories.map((category) => (
// ... existing code ...
<button className="transform transition duration-500 ease-in-out hover:scale-110">
  <div key={category.name} className="relative">
    <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white font-bold text-center py-2">
      {category.name}
    </div>
  </div>
</button>
// ... existing code ...
      ))}
    </div>
  );
};

export default CardCategory;