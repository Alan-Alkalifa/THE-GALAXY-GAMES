'use client'
import React, { useState } from 'react'

const products = [
    {
      title: "PlayStation Portal™ remote player",
      description: "Play your PS5 console over your home Wi-Fi with console quality controls using PlayStation Portal Remote Player.",
      imageUrl: "/card4.svg",
      category: "PS5"
    },
    {
      title: "PULSE Explore™ wireless earbuds",
      description: "Enjoy lifelike gaming audio wherever play takes you with the PULSE Explore wireless earbuds.",
      imageUrl: "/cardAcc1.svg",
      category: "PS5"
    },
    {
      title: "PULSE Elite™ wireless headset",
      description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
      imageUrl: "/cardAcc2.svg",
      category: "PS5"
    },
    {
      title: "Racing wheels",
      description: "Enhance your driving experience with the latest in racing wheel technology, designed to give you the edge in any racing game.",
      imageUrl: "/cardAcc3.svg",
      category: "PS4"
    },
    {
      title: "T.Flight Hotas 4 flight stick",
      description: "Take control of the skies with the T.Flight Hotas 4, designed for enhanced precision and control in flight simulators.",
      imageUrl: "/cardAcc4.svg",
      category: "PS4"
    },
    {
      title: "PlayStation 4 PRO",
      description: "Play with ultra-high resolution with the PlayStation 4 PRO, designed for the ultimate gaming experience.",
      imageUrl: "/cardAcc5.svg",
      category: "PS4"
    },
    {
      title: "PlayStation 4 SLIM",
      description: "Play your favorite games with the sleek and compact PlayStation 4 SLIM, designed for efficient space usage and powerful gaming performance.",
      imageUrl: "/cardAcc6.svg",
      category: "PS4"
    },
    {
      title: "Joy-Con Nintendo Switch Controllers",
      description: "Experience versatile gaming with Joy-Con controllers for the Nintendo Switch. Available in various colors, these controllers ensure fun and dynamic gameplay.",
      imageUrl: "/cardAcc7.svg",
      category: "SWITCH"
    },
    {
      title: "Nintendo Switch V2",
      description: "Get gaming anywhere with the Nintendo Switch V2. With improved battery life and vibrant screen colors, the Switch V2 enhances your on-the-go gaming sessions.",
      imageUrl: "/cardAcc8.svg",
      category: "SWITCH"
    }
  ];

const CardAccessories = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  
  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(product => {
        if (selectedCategory === 'PLAYSTATION 4') return product.category === 'PS4';
        if (selectedCategory === 'PLAYSTATION 5') return product.category === 'PS5';
        if (selectedCategory === 'NINTENDO SWITCH') return product.category === 'SWITCH';
        return true;
      });

  return (
    <>
    <div className="flex justify-center items-center bg-[#666666] p-4">
      <div className="bg-[#E7E7E7] p-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 py-1 w-full max-w-[900px] rounded-full justify-between">
        <button 
          className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${selectedCategory === 'ALL' ? 'bg-black text-white' : 'bg-[#E7E7E7]'}`}
          onClick={() => setSelectedCategory('ALL')}
        >
          ALL
        </button>
        <button 
          className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${selectedCategory === 'PLAYSTATION 4' ? 'bg-black text-white' : 'bg-[#E7E7E7]'}`}
          onClick={() => setSelectedCategory('PLAYSTATION 4')}
        >
          PLAYSTATION 4
        </button>
        <button 
          className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${selectedCategory === 'PLAYSTATION 5' ? 'bg-black text-white' : 'bg-[#E7E7E7]'}`}
          onClick={() => setSelectedCategory('PLAYSTATION 5')}
        >
          PLAYSTATION 5
        </button>
        <button 
          className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${selectedCategory === 'NINTENDO SWITCH' ? 'bg-black text-white' : 'bg-[#E7E7E7]'}`}
          onClick={() => setSelectedCategory('NINTENDO SWITCH')}
        >
          NINTENDO SWITCH
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
      {filteredProducts.map((product, index) => (
        <button key={index} className='transition duration-300 hover:scale-95 focus:outline-none'>
          <div className="bg-[#DCDCDC] shadow-lg rounded-lg overflow-hidden h-full">
            <div className="relative pt-[75%]">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="absolute top-0 left-0 w-full h-full p-4 object-contain"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-center text-black mb-2">
                {product.title}
              </h3>
              <p className='text-black text-sm sm:text-base'>
                {product.description}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
    </>
  );
}

export default CardAccessories